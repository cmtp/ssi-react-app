import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import ITEMS from '../shared/items';
import Catalog from './Catalog';
import ItemDetail from './ItemDetail';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      items: ITEMS,
      selectedItem: null,
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
      return <Home />;
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
          <Redirect to="/home" />
        </Switch>
        {/* <Catalog
          items={this.state.items}
          onClick={itemId => {
            this.onItemSelect(itemId);
          }}
        />
        <ItemDetail
          item={
            this.state.items.filter(
              item => item.id === this.state.selectedItem
            )[0]
          }
        /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
