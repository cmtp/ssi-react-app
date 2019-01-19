import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

import uuidv4 from 'uuid/v4';

class ItemDetail extends Component {
  comments;

  renderComments(comments) {
    if (comments.length > 0) {
      this.comments = comments.map(item => (
        <li key={uuidv4()}>
          <h5>{item.comment}</h5>
          -- {item.author} - {item.date}
        </li>
      ));
    } else {
      return <li />;
    }
    return this.comments;
  }

  renderCommentSection(selectedItem) {
    if (selectedItem !== null) {
      return (
        <div>
          <h4>Comentarios</h4>
          <ul className="list-unstyled">
            {this.renderComments(selectedItem.comments)}
          </ul>
        </div>
      );
    }
    return <div />;
  }

  render() {
    if (this.props.selected) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                width="100%"
                src={this.props.selected.image}
                alt={this.props.selected.name}
              />
              <CardBody>
                <CardTitle>{this.props.selected.name}</CardTitle>
                <CardText>{this.props.selected.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderCommentSection(this.props.selected)}
          </div>
        </div>
      );
    }
    return <div />;
  }
}

export default ItemDetail;
