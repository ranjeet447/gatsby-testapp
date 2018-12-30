import React, { Component } from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'

const mapboxAPIkey = "pk.eyJ1IjoiZmVsaXh0YW4iLCJhIjoiY2l0N3RuanV3MGI5ZTJ6cDFwZnl5emMyaCJ9.ODVgVlnonjis9Hkiz_bj9A";
const basemapUrl = `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${mapboxAPIkey}`;

const mapStyle = {
  height:'500px',
}

export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 27.0238,
      lng: 74.2179,
      zoom: 6,
    };
  }
  
  
  render() {
    const position = [this.state.lat, this.state.lng];
    // const { options } = this.props
    console.log("props",this.props)
    if (typeof window !== 'undefined') {
      return (
        <Map id="map" center={position} zoom={this.state.zoom} style={mapStyle}>
          <TileLayer url={basemapUrl} id='mapbox.light' />

          {this.props.data.ds.map(({featureCollection},i)=>{
            return <GeoJSON key={i} data={featureCollection} />
          })}

        </Map>
      )
    }
    return null
  }
}