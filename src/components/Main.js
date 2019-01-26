import React, { Component } from 'react';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import addComment from '../redux/ActionCreators';

import ITEMS from '../shared/items';
import COMMENTS from '../shared/comments';
import EMPLOYEES from '../shared/employees';
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
  addComment: (itemId, rating, author, comment) =>
    dispatch(addComment(itemId, rating, author, comment)),
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    console.log('Main componentDidMount es invocado');
  }

  onItemSelect(itemId) {
    this.setState({
      selectedItem: itemId,
    });
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          item={this.props.items.filter(item => item.featured)[0]}
          employee={
            this.props.employees.filter(employee => employee.featured)[0]
          }
        />
      );
    };

    const ItemWithId = ({ match }) => {
      return (
        <ItemDetail
          item={
            this.props.items.filter(
              item => item.id === parseInt(match.params.itemId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            comment => comment.itemId === parseInt(match.params.itemId, 10)
          )}
          addComment={this.props.addComment}
        />
      );
    };

    const AboutPage = () => {
      return <About employees={this.props.employees} />;
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
          <Route exact path="/contactus" component={Contact} />} />
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
