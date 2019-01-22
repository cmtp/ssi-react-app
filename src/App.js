import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ITEMS from './shared/items';
import Main from './components/Main';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      items: ITEMS,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
