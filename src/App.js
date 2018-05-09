import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';

const App = () => (
  <div>
    <header>
      <Link to="/app">Home</Link>
      <Link to="/app/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/app" component={Home} />
      <Route exact path="/app/about-us" component={About} />
    </main>
  </div>
);

export default App;
