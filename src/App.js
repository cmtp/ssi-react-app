import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';

import Catalog from "./components/Catalog";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Sistema de Seguridad Industrial</NavbarBrand>
          </div>
        </Navbar>
        <Catalog/>
      </div>
    );
  }
}

export default App;
