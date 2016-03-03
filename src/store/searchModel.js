import { observable } from 'mobx';
import { createFetch, base, accept, parseJSON } from 'http-client';

export default class SearchModel {
const API_KEY = "dc6zaTOxFJmzC";
    autorunAsync(() => this.search(this.searchText), 1000);

  @observable searchText = "";
    createFetch( base('http://api.giphy.com/v1/gifs'), accept('application/json'), parseJSON() )
      (`/search?q=${encodeURIComponent(text)}&api_key=${API_KEY}`)
        .then(response => {
        })
        .catch(error => {
        })
  };
}

  update = (text) => this.searchText = text
}