import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
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

class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      items: ITEMS,
      comments: COMMENTS,
      employees: EMPLOYEES,
    };
    console.log('Main constructor es invocado');
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
          item={this.state.items.filter(item => item.featured)[0]}
          employee={
            this.state.employees.filter(employee => employee.featured)[0]
          }
        />
      );
    };

    const ItemWithId = ({ match }) => {
      return (
        <ItemDetail
          item={
            this.state.items.filter(
              item => item.id === parseInt(match.params.itemId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            comment => comment.itemId === parseInt(match.params.itemId, 10)
          )}
        />
      );
    };

    const AboutPage = () => {
      return <About employees={this.state.employees} />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/catalog"
            component={() => <Catalog items={this.state.items} />}
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

export default Main;
