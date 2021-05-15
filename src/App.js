import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import Main from './components/main/Main.jsx';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Main />
      </div>
    </Provider>
  );
};

export default App;
