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
    ],
    query: ""
  }
}
  textInput(e) {
    this.setState({query: e.target.value})
  }

  componentDidMount() {
    window.initMap = this.initMap;
    window.state = this.state;
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
        content: `${marker.title}`
  });

  function mapReset() {
    map.panTo({lat: 40.740775, lng: -73.983935});
    map.setZoom(14)
  }

/*
      mapReset.addListener('click', function(){
        map.panTo(map.center);
        map.setZoom(14)
      })
*/

    /*    mapReset.addListener('click', function(){
          map.panTo(map.center);
          map.setZoom(14)
        })
*/
        marker.addListener('click', function(){
          infowindow.open(map, marker);
          map.panTo(marker.position);
          map.setZoom(20)
        })
      })
  }

  render() {
    /* got this code from... https://stackoverflow.com/questions/41436253/how-to-filter-list-while-typing-with-input-field and it doesn't seem to be working for what I need.
    How do I update my state.locations based on state.query? 
    */
    const locales = this.state.locations.filter(d => this.state.query === '' || d.includes(this.state.query)).map(function(d, index) {
      return d;
    });

    return (
      <main>
        <Menu title={this.state.locations}/>
        <input value={this.state.query} type="text" onChange={event => this.textInput(event)}/>
        <button id="mapReset">Reset Map</button>
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
