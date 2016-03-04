import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './store';
import { observer } from 'mobx-react';
import Item from './components/Item.jsx';

@observer
class App extends Component {

  constructor() {

    super();

    this.updateSearchText = this.updateSearchText.bind(this);
  }

  updateSearchText({ target: { value: text } }) {
    this.props.appState.searchModel.searchText = text;
  }

  render() {

    const { searchModel } = this.props.appState;

    return (
      <div>
        <h1>Coucou</h1>

        <input type="text" onChange={this.updateSearchText} />

        <span>{searchModel.searchText}</span>
        {searchModel.loading && <p>Loading...</p>}
        <p>
          <span>Number of results : {searchModel.totalResults}</span>
        </p>


        {searchModel.results.map(result => <Item key={result.id} gifSrc={result.images.fixed_height.url} />)}
      </div>
    );
  }
}

ReactDOM.render(<App appState={{ ...createStore() }} />, document.getElementById('root'));