import React, { Component } from 'react';
import Map from './Map';
import GoogleApiComponent from './GoogleApiComponent';

export class Container extends React.Component {
    render() {
      if (!this.props.loaded) {
        return <div>Loading...</div>
      }

      return (
        <div style={{ height: '100vh', width: '100%' }}>
        <Map google={this.props.google}/>
        </div>
      )
    }
  }
  
  export default GoogleApiComponent({
    apiKey: 'AIzaSyD_x8POJw407kkOHjTU5KRIo6ez2LrMd-g'
  })(Container)