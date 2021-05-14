import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import Main from './components/main/Main.jsx';
import Header from './components/header/Header';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Main />
      </div>
    </Provider>
  );
};

export default App;
