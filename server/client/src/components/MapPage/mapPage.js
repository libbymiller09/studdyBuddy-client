import React from 'react';
import MapContainer from './MapContainer';

class MapPage extends React.Component {
  render() {
    return (
      <div>
        <div className="mapComponent">
        <h2>Check the map!</h2>
         <MapContainer />
        </div>
      </div>
    );
  }
}

export default  MapPage;