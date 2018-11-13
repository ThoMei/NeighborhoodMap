import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu.js'

var google;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations : [
      {title: 'Ippudo NY', location: {lat: 40.730948, lng: -73.990287}},
      {title: 'Totto Ramen', location: {lat: 40.764422, lng: -73.987552}},
      {title: 'Momofuku Noodle Bar', location: {lat: 40.729233, lng: -73.98451}},
      {title: 'Minca', location: {lat: 40.723998, lng: -73.982949 }},
      {title: 'Momosan Ramen & Sake', location: {lat: 40.749926, lng: -73.977}}
    ]
  }
}

  componentDidMount() {
    window.initMap = this.initMap;
    window.state = this.state;
    console.log(this.state.locations[0].location.lat);
    console.log(this.state.locations[0].location.lng);
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyB-mwNzKac0ksFHUQAFD5HXTbYmvrtBIrg&v=3&callback=initMap')
}

  initMap() {
    console.log(this.state);
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.740775, lng: -73.983935},
      zoom: 14
    });

      this.state.locations.map(locale => {
        const marker = new window.google.maps.Marker({
        position: {lat: locale.location.lat, lng: locale.location.lng},
        map: map,
        title: locale.title
      });

      const infowindow = new window.google.maps.InfoWindow({
        content: marker.title
  });

        marker.addListener('click', function(){
          infowindow.open(map, marker)
        })
      })

  }



  render() {
    return (
      <main>
        <Menu title={this.state.locations}/>
        <div id="map"></div>
      </main>

    );
  }
}

function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    ref.parentNode.insertBefore(script, ref);
}

export default App;
