import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Landing from './pages/landing/landing'

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/landing">
          <Landing />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
