import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import Main from './components/main/Main.jsx';
import Header from './components/header/Header';
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './components/content/details/Details';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="app">
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/:id/:name/details" component={Details} exact />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
