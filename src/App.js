import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Edit from './components/Edit';
import ContactUs from './components/pages/contactUs';
import NotFound from './components/pages/notFound';
import NavBarTop from './components/navBar/navBarTop';
import Headers from './components/header/Header';
import ApiTest from './components/pages/apiTest';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import { Provider } from './context';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Provider >
        <Router>
          <React.Fragment  >
            <NavBarTop />
            <Switch>
              <Route exact path="/add" component={Headers} />
              <Route exact path="/details" component={Contacts} />
              <Route exact path="/api-test" component={ApiTest} />
              <Route exact path="/edit/:editid" component={Edit} />
              <Route exact path="/contact-us/:number" component={ContactUs} />
              <Route component={NotFound} />
            </Switch>
          </React.Fragment >
        </Router>
      </Provider >
    );
  }
}

export default App;
