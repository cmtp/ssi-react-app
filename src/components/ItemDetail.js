import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

import uuidv4 from 'uuid/v4';

class ItemDetail extends Component {
  comments;
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

  renderComments(comments) {
    if (comments.length > 0) {
      this.comments = comments.map(item => {
        return (
        <li key={uuidv4()}>
        <h5>{item.comment}</h5>
        -- {item.author} - {item.date}
        </li>
        );
      });
    }
    else {
      return <li />;
    }
    return this.comments;
  }

  renderCommentSection(selectedItem) {
    if (selectedItem !== null) {
      return (
        <div>
          <h4>Comentarios</h4>
          <ul className="list-unstyled">{this.renderComments(selectedItem.comments)}</ul>
        </div>
      );
    } else {
      return <div />;
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
            {this.renderCommentSection(this.state.selectedItem)}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default ItemDetail;
