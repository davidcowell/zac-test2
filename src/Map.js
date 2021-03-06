import React, { Component } from 'react';
import ReactDOM from 'react';

export default class Map extends React.Component {

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
    }
    
    loadMap() {
        if (this.props && this.props.google) {
            // google is available
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            let zoom = 14;
            let lat = 37.774929;
            let lng = -122.419416;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);
        }
        // ...
    }
    
    componentDidMount() {
        this.loadMap();
    } 

    render() {
        return (
            <div ref='map' style={{ height: '100vh', width: '100%' }}>
            Loading map...
            </div>
        )
    }

}