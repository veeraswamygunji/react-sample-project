import './App.css';
import React from 'react';
import Navbar from './components/includes/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/includes/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
