import React from 'react';

import { createStyles, withStyles, Theme, WithStyles } from '@material-ui/core';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

const styles = (theme: Theme) => createStyles({
  map: {
    height: '100%'
  }
});

interface Props extends WithStyles<typeof styles> {
}

class TravelMap extends React.Component<Props> {

  render() {
    const { classes } = this.props;

    const position: LatLngExpression = [15, 0];
    const zoom = 3;

    return (
      <Map className={classes.map} center={position} zoom={zoom}>
        <TileLayer
          url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}
  

export default withStyles(styles)(TravelMap);
