import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class Menu extends Component {
  render() {
    const titles = this.props.title.map(function(title, i){
           return <li key={i}>{title.title}</li>
         });

    return (
      <div id="menu">
        <p>Menu</p>
        <ul>
          <li>{titles}</li>
        </ul>
      </div>
    );
  }
}


export default Menu;
