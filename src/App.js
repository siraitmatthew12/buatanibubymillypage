import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import About from './components/About';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Home" exact component={Home}/>
          <Route path="/Hero" exact component={Hero}/>
          <Route path="/About" exact component={About}/>
          <Route path="/Catalog" exact component={Catalog}/>
          <Route path="/Contact" exact component={Contact}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
