import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomeComponent from './Containers/Home';
import FaqsComponent from './Containers/Faqs';
import NotFoundComponent from './Containers/NotFoundPage';
import FeedbackComponent from './Containers/Feedback';
import Header from './Components/Header';
import LaunchesComponent from './Containers/Launches';

const NAVBAR = [
  {
    navName: 'Home Page',
    navLink: '/',
    navKey: 1
  }, {
    navName: 'Faqs',
    navLink: '/faqs',
    navKey: 2
  }, {
    navName: 'Feedback',
    navLink: '/feedback',
    navKey: 3
  }
];
const test = ()=>{
  console.log('test')
}
class App extends Component {
  render() {
   
    return (
      <div className="app-container">
  
      <Header
        navItems={ NAVBAR }
      />
         <Switch>
          <Route exact path='/' component={ HomeComponent } />
          <Route path='/home' component={ HomeComponent } />
          <Route path='/launches' component={ LaunchesComponent } />
          <Route path='/faqs' component={ FaqsComponent } />
          <Route path='/feedback' component={ FeedbackComponent } />
          <Route path='*' component={ NotFoundComponent } />
        </Switch>
   
      </div>
    );
  }
}

export default App;
