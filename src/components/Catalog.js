import React, { Component } from "react";
import {Card, CardImg, CardImgOverlay, CardTitle, Media} from "reactstrap";

import uuidv4 from 'uuid/v4';

class Catalog extends Component {
  catalog;

  constructor(props, context) {
    super(props, context);

    this.catalog = this.props.items.map(item => {
      return (
        <div key={uuidv4()} className="col-12 col-md-5 m-1">
          <Card>
              <CardImg width="100%" object="true" src={item.image} alt={item.name}/>
              <CardImgOverlay>
                <CardTitle>
                    {item.name}
                </CardTitle>
              </CardImgOverlay>
          </Card>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.catalog}
        </div>
      </div>
    );
  }
}

export default Catalog;
