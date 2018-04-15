import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios'
import './App.css';


const api = 'https://opendata.socrata.com/resource/xy4y-c4mk.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      center: {
        lat: 48.429245,
        lng: -123.366539
      },
      zoom: 11,
      city: []
    }
  }

  componentDidMount() {
    axios.get(api)
    .then(cities => {
      console.log(cities.data)
      this.setState({
        city: cities.data
      })
    })

  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCB1K4Dx_ZNpjq3qxYOqV6kxt63iiCfJFo" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          {this.state.city.map((c, i)=>
            <div key={i}
            lat={c.coordinates.latitude}
            lng={c.coordinates.longitude}>

              <img
              className="starbucks"
              src="https://s3.amazonaws.com/freebiesupply/large/2x/starbucks-logo-png-transparent.png"
              alt="kosong"/>
            </div>
          )}

        </GoogleMapReact>

      </div>
    );
  }
}

export default App;
