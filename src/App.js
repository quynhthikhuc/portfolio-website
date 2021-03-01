import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import TheOrdinary from './pages/TheOrdinary';

function App() {
  return (
    <div id="wrapper">
      <Router>
      <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/resume" exact component={() => <Resume />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/the-ordinary" exact component={() => <TheOrdinary />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
