import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Redux</h1>
      </div>
    </Provider>
  );
};

export default App;
