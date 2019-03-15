import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomeComponent from './Containers/Home';
import FaqsComponent from './Containers/Faqs';
import NotFoundComponent from './Containers/NotFoundPage';
import FeedbackComponent from './Containers/Feedback';

const NAVBAR = [
  {
    navName: 'Home Page',
    navLink: '/',
  }, {
    navName: 'Faqs',
    navLink: '/faqs',
  }, {
    navName: 'Feedback',
    navLink: '/feedback',
  }
];

class App extends Component {
  render() {
    return (
      <div className="app-container">
         <Switch>
          <Route exact path='/' component={ HomeComponent } />
          <Route path='/home' component={ HomeComponent } />
          <Route path='/faqs' component={ FaqsComponent } />
          <Route path='/feedback' component={ FeedbackComponent } />
          <Route path='*' component={ NotFoundComponent } />
        </Switch>
   
      </div>
    );
  }
}

export default App;
