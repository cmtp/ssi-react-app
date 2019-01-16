import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';

import Catalog from "./components/Catalog";

import './App.css';
import {ITEMS} from "./shared/items";

class App extends Component {

    constructor() {
        super();
        this.state = {
            items: ITEMS
        }
    }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Sistema de Seguridad Industrial</NavbarBrand>
          </div>
        </Navbar>
        <Catalog items={this.state.items}/>
      </div>
    );
  }
}

export default App;
