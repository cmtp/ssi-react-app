import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ITEMS from './shared/items';
import Main from './components/Main';
import { configureStore } from './redux/reducer';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
