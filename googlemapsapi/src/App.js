import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios'
import './App.css';


const api = 'https://charlottew.demo.socrata.com/resource/cjpn-irfg.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      center: {
        lat: 36.2048,
        lng: 138.2529
      },
      zoom: 8,
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
      <div style={{ height: '100vh', width: '90%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCB1K4Dx_ZNpjq3qxYOqV6kxt63iiCfJFo" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          {(this.state.city.length > 0)
            ?
            this.state.city.map((c, i)=>
            (c.location_1)
            ?
            <div key={i}
            lat={c.location_1.coordinates[1]}
            lng={c.location_1.coordinates[0]}>
            {/* {c.name} */}
              <img
              className="starbucks"
              src="https://s3.amazonaws.com/freebiesupply/large/2x/starbucks-logo-png-transparent.png"
              alt="kosong"/>
            </div>
            : null
            )
            : null
          }

        </GoogleMapReact>
        <h1>OKS</h1>

      </div>
    );
  }
}

export default App;
