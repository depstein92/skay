import React, { Component } from 'react';
import Appointment from '../containers/Appointment';
import Home_Landing from './Home_Landing';
import Store from '../containers/Store';
import About from './About';
import Book_Appointment from '../containers/Book_Appointment';
import { hot } from 'react-hot-loader'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
    <Router>
      <div>
       <Route exact path='/' component={Home_Landing} />
        <Route path='/shop' component={Store} />
        <Route path='/about' component={About} />
        <Route path='/appointment' component={Appointment} />
        <Route path='/book_appointment/:day/:month' component={Book_Appointment} />
      </div>
    </Router>
    );
  }
}

export default hot(module)(App);
