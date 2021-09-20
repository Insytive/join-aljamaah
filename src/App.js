import React, { Component } from 'react';
import Registration from './pages/Registration';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SuccessPage from './pages/SuccessPage';


class App extends Component {
 

  render() {
    return (
      <Router>
        <Switch>
          <Route exact  path="/">
            <Registration className="registration-page" />
          </Route>
          <Route path="/registration-success">
            <SuccessPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
