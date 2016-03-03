import { observable, autorun, autorunAsync } from 'mobx';
import { createFetch, base, accept, parseJSON } from 'http-client';

const API_KEY = "dc6zaTOxFJmzC";

class SearchModel {

  constructor() {
    autorunAsync(() => this.search(this.searchText), 1000);
  }

  updateText = (text) => this.searchText = text;

  @observable searchText = "";
  @observable results = [];
  @observable error = null;
  @observable loading = false;

  @observable search = (text) => {

    this.error = null;
    this.loading = true;

    createFetch( base('http://api.giphy.com/v1/gifs'), accept('application/json'), parseJSON() )
      (`/search?q=${encodeURIComponent(text)}&api_key=${API_KEY}`)
        .then(response => {
          // response.jsonData.data.forEach(gif => this.results.push(gif));
          this.loading = false;

          console.log('this.loading:', this.loading);
        })
        .catch(error => {
          this.error = error;
          this.loading = false;
        })
  };
}

export default SearchModel;