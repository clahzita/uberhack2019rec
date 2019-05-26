import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { InfoWindow, Marker } from 'google-maps-react';

import MapContainer from './components/App/MapContainer.js'
//import SideMenu from './components/App/SideMenu.js'
import DrawerApp from './components/App/Drawer.js'

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class Sobre extends Component {
  render() {
    return (
    	<div>
    		<DrawerApp />
    		<main>
        <div>
          <p>SOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOBREEEEEEEEEEEEE</p>
        </div>    			
    		</main>    		
    	</div>

      
    );
  }
}

export default Sobre;