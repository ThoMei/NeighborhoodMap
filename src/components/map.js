import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

/*<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-mwNzKac0ksFHUQAFD5HXTbYmvrtBIrg&v=3&callback=initMap"
   async defer>
   function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.741328, lng: -74.003247},
        zoom: 13
      })
    }
   </script>
*/


var map;
var google;

class Map extends Component {
  componentDidMount() {
    // Connect the initMap() function within this class to the global window context,
    // so Google Maps can invoke it
    window.initMap = this.initMap;
    // Asynchronously load the Google Maps script, passing in the callback reference
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyB-mwNzKac0ksFHUQAFD5HXTbYmvrtBIrg&v=3&callback=initMap')
}

  initMap() {
    map = new google.maps.Map(ReactDOM.findDOMNode(this.refs.map), {
      center: {lat: 40.741328, lng: -74.003247},
      zoom: 13
    });
  }

  render() {
    return (
      <div>
      <div ref="map" ></div>
      </div>
    );
  }
}

function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}

export default Map;
