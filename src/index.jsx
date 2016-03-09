import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './store';
import Search from './components/Search.jsx';
import Items from './components/Items.jsx';

class App extends Component {

  render() {

    const { appState } = this.props;

    return (
      <div>
        <Search appState={appState} />
        <Items appState={appState} />
      </div>
    );
  }
}

ReactDOM.render(<App appState={{ ...createStore() }} />, document.getElementById('root'));