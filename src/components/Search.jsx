import React from 'react';
import { observer } from 'mobx-react';

@observer
class Search extends React.Component {

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
        <input type="text" defaultValue={searchModel.searchText} onChange={this.updateSearchText} />

        {searchModel.loading && <span>Loading...</span>}

        <p>Your currrent search : {searchModel.searchText}</p>

        <p>
          <span>Total number of results : {searchModel.totalResults}</span>
        </p>
      </div>
    );
  }
}

export default Search;