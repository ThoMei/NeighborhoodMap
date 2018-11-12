import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

const locations = [
  {title: 'Ippudo NY', location: {lat: 40.730948, lng: 73.990287}},
  {title: 'Totto Ramen', location: {lat: 40.764422, lng: 73.987552}},
  {title: 'Momofuku Noodle Bar', location: {lat: 40.729233, lng: -73.98451}},
  {title: 'Minca', location: {lat: 40.723998, lng: -73.982949 }},
  {title: 'Momosan Ramen & Sake', location: {lat: 40.749926, lng: -73.977445}}
]

class Menu extends Component {
  render() {
    console.log(this);
    return (
      <div id="menu">
        <p>Menu</p>
        <ul>
        {
          locations.map(function(title, i){
            return <li key={i}>{locations[i].title}</li>
          })
        }
        </ul>
      </div>
    );
  }
}


export default Menu;
