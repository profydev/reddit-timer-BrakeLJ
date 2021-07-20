import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from './pages/Search';
import Home from './pages/Home';

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
