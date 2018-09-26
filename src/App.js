import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Proptypes from 'prop-types';
import {Home} from './home/Home';
import {About} from './about/About';
import {Details} from './details/Details';
import {List} from './list/List';

class App extends Component {
  static propTypes = { match: Proptypes.object.isRequired }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        


        <BrowserRouter>
          <div>
          <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/about" component={About} />
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
