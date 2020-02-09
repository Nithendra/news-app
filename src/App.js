import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../src/Scense/Home';
import Contact from '../src/Scense/Contact';
import News from '../src/Scense/News';

import './App.css';

import Header from '../src/Components/Header';

function App() {
  return (
    <div className="main-conainer">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/news' component={News} />
          <Route path='/contact' component={Contact} />
        </Switch>
    </div>
  );
}

export default App;
