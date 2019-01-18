import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from 'reactstrap';

import ItemDetail from './ItemDetail';

import uuidv4 from 'uuid/v4';

class Catalog extends Component {
  catalog;

  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null,
    };

    this.catalog = this.props.items.map(item => {
      return (
        <div key={uuidv4()} className="col-12 col-md-5 m-1">
          <Card
            onClick={() => {
              this.onItemSelected(item);
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

  onItemSelected(item) {
    this.setState({
      selectedItem: item,
    });
  }

  renderItem(item) {
    if (item !== null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={item.image} alt={item.name} />
            <CardBody>
              <CardTitle>{item.name}</CardTitle>
              <CardText>{item.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">{this.catalog}</div>
        <ItemDetail selected={this.state.selectedItem} />
      </div>
    );
  }
}

export default Catalog;
