import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './store';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

let appState = createStore();

@observer
class App extends Component {

  constructor() {

    super();

    this.updateSearchText = this.updateSearchText.bind(this);
  }

  updateSearchText({ target: { value: text } }) {
    this.props.searchModel.update(text);
  }

  render() {

    return (
      <div>
        <h1>Coucou</h1>
        <input ref="SearchInput" type="text" onChange={this.updateSearchText}/>
        <span>{this.props.searchModel.searchText}</span>
      </div>
    );
  }
}

ReactDOM.render(<App { ...appState } />, document.getElementById('root'));