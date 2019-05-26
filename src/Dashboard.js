import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAUZHK6bceG5xlCdi4FdSvL_LqmdZbgvDU'
});

// Geocode an address.
googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAUZHK6bceG5xlCdi4FdSvL_LqmdZbgvDU'
})(MapContainer);