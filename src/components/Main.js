import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';

import Catalog from './Catalog';

import ITEMS from '../shared/items';
import ItemDetail from './ItemDetail';

class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      items: ITEMS,
      selectedItem: null,
    };
  }

  onItemSelected(item) {
    this.setState({
      selectedItem: item,
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Sistema de Seguridad Industrial</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
          <Catalog
            items={this.state.items}
            onClick={itemId => this.onItemSelected(itemId)}
          />
          <ItemDetail
            selected={
              this.state.items.filter(
                item => item.id === this.state.selectedItem
              )[0]
            }
          />
        </div>
      </div>
    );
  }
}

export default Main;
