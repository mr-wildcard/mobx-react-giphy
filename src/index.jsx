import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './store';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

let appState = createStore();
import DebounceInput from 'react-debounce-input';

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

        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={this.updateSearchText} />

        <span>{appState.searchModel.searchText}</span>
      </div>
    );
  }
}

ReactDOM.render(<App { ...appState } />, document.getElementById('root'));