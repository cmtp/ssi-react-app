import React, { Component } from "react";
import { Media } from "reactstrap";
import {ITEMS} from "../shared/items";

import uuidv4 from 'uuid/v4';

class Catalog extends Component {
  catalog;

  constructor(props, context) {
    super(props, context);

    this.state = {
      items: ITEMS
    };
    this.catalog = this.state.items.map(item => {
      const imgStyle = { maxHeight: 128, maxWidth: 128 };
      return (
        <div key={uuidv4()} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media object src={item.image} alt={item.name} style={imgStyle}/>
            </Media>
            <Media body className="ml-5">
              <Media heading>{item.name}</Media>
              <p>{item.description}</p>
            </Media>
          </Media>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Media list>{this.catalog}</Media>
        </div>
      </div>
    );
  }
}

export default Catalog;
