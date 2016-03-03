import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './store';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import DebounceInput from 'react-debounce-input';

@observer
class App extends Component {

  constructor() {

    super();

    this.updateSearchText = this.updateSearchText.bind(this);
  }

  updateSearchText({ target: { value: text } }) {

    const { appState } = this.props;

    appState.searchModel.update(text);
  }

  render() {

    const { appState } = this.props;

    return (
      <div>
        <h1>Coucou</h1>

        <input type="text" onChange={this.updateSearchText} />

        <span>{searchModel.searchText}</span>
        <p>
          {searchModel.loading && <span>[> put awesome loading spinner here...]</span>}
          <span>Number of results : {searchModel.results.length}</span>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App appState={{ ...createStore() }} />, document.getElementById('root'));