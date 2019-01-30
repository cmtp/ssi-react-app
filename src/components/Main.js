import React, { Component } from 'react';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import {
  postComment,
  fetchItems,
  fetchComments,
  fetchEmployees,
} from '../redux/ActionCreators';

import Catalog from './Catalog';
import ItemDetail from './ItemDetail';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';

const mapStateToProps = state => ({
  items: state.items,
  employees: state.employees,
  comments: state.comments,
});

const mapDispatchToProps = dispatch => ({
  postComment: (itemId, rating, author, comment) =>
    dispatch(postComment(itemId, rating, author, comment)),
  fetchItems: () => {
    dispatch(fetchItems());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset('feedback'));
  },
  fetchComments: () => dispatch(fetchComments()),
  fetchEmployees: () => {
    dispatch(fetchEmployees());
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchItems();
    this.props.fetchEmployees();
    this.props.fetchComments();
  }

  onItemSelect(itemId) {
    this.setState({
      selectedItem: itemId,
    });
  }

  render() {
    const HomePage = () => {
      console.log(this.props.employees);
      return (
        <Home
          item={this.props.items.items.filter(item => item.featured)[0]}
          itemsLoading={this.props.items.isLoading}
          itemsErrMess={this.props.items.errMess}
          employee={
            this.props.employees.employees.filter(
              employee => employee.featured
            )[0]
          }
        />
      );
    };

    const ItemWithId = ({ match }) => {
      return (
        <ItemDetail
          item={
            this.props.items.items.filter(
              item => item.id === parseInt(match.params.itemId, 10)
            )[0]
          }
          isLoading={this.props.items.isLoading}
          errMess={this.props.items.errMess}
          comments={this.props.comments.comments.filter(
            comment => comment.itemId === parseInt(match.params.itemId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      );
    };

    const AboutPage = () => {
      return <About employees={this.props.employees.employees} />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/catalog"
            component={() => <Catalog items={this.props.items} />}
          />
          <Route path="/catalog/:itemId" component={ItemWithId} />
          <Route
            exact
            path="/contactus"
            component={() => (
              <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
            )}
          />
          } />
          <Route exact path="/aboutus" component={AboutPage} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
