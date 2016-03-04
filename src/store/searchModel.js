import { observable, autorun, autorunAsync, transaction } from 'mobx';
import request from 'superagent'

const API_KEY = "dc6zaTOxFJmzC";

class SearchModel {

  @observable searchText = "";
  @observable results = [];
  @observable totalResults = 0;
  @observable error = null;
  @observable loading = false;

  constructor() {

    autorunAsync(() => {
        this.search(this.searchText)
      },
      1000
    );
  }

  search = (text) => {

    // console.log('persisting into local fucking storage !!!');
    request
      .get(`http://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(text)}&api_key=${API_KEY}`)
      .set('Accept', 'application/json')
      .end((error, { body }) => {

        this.loading = false;

        if (error) {
          this.error = error;
        }
        else {
          this.results = body.data;
          this.totalResults = body.pagination.total_count;
        }
      });
  };
}

export default SearchModel;