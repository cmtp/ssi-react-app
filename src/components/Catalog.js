import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Catalog extends Component {
  constructor(props, context) {
    super(props, context);

    this.catalog = this.props.items.map(item => {
      return (
        <div key={item.id} className="col-12 col-md-5 m-1">
          <Card
            onClick={() => {
              this.props.onClick(item.id);
            }}
          >
            <CardImg
              width="100%"
              object="true"
              src={item.image}
              alt={item.name}
            />
            <CardImgOverlay>
              <CardTitle>{item.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
  }

  catalog;

  render() {
    return <div className="row">{this.catalog}</div>;
  }
}

export default Catalog;
