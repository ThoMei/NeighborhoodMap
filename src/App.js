import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu.js'

var google;

class App extends Component {
  componentDidMount() {
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyB-mwNzKac0ksFHUQAFD5HXTbYmvrtBIrg&v=3&callback=initMap')
}

  initMap() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.741328, lng: -74.003247},
      zoom: 13
    });
  }

  render() {
    return (
      <main>
        <Menu />
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
