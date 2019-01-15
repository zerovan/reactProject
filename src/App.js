import React, { Component } from 'react';
import './App.css';
import Detail from './components/Detail.js';
import Headers from './components/header/Header';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import { Provider } from './context';
import { Consumer } from './context';

class App extends Component {

  render() {
    return (
      <Provider >
        <Consumer>
          {value => {
            const { contacts } = value;
            console.log(contacts);
            return (
              <React.Fragment  >
                <Headers />
                {
                  contacts.map(row => (
                    <Detail key={row.id} contact={row} />
                  ))
                }
              </React.Fragment >
            )
          }
          }
        </Consumer>
      </Provider >
    );
  }
}

export default App;
