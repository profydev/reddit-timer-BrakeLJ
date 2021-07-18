import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from './components/Search';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Router>
    </div>
  );
}

export default App;
