import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class Menu extends Component {
  render() {
//    const locations = this.props.locations;
    console.log(this.props.title);
//    console.log(locations[0]);

    return (
      <div id="menu">
        <p>Menu</p>
        <ul>
          <li>{this.props.title[0].title}</li>
          <li>{this.props.title[1].title}</li>
          <li>{this.props.title[2].title}</li>
          <li>{this.props.title[3].title}</li>
          <li>{this.props.title[4].title}</li>
        </ul>
      </div>
    );
  }
}


export default Menu;
