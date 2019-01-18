import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class ItemDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.selected !== prevProps.selected) {
      this.setState({
        selectedItem: this.props.selected,
      });
    }
  }

  renderComments(selectedItem) {
    if( selectedItem !== null ) {
        return <div></div>;
    }
  }

  render() {
    if (this.state.selectedItem) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                width="100%"
                src={this.state.selectedItem.image}
                alt={this.state.selectedItem.name}
              />
              <CardBody>
                <CardTitle>{this.state.selectedItem.name}</CardTitle>
                <CardText>{this.state.selectedItem.description}</CardText>
              </CardBody>
            </Card>
          </div>
            <div className="col-12 col-md-5 m-1">
                {this.renderComments(this.state.selectedItem)}
            </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default ItemDetail;
