import { observable } from 'mobx';

export default class SearchModel {
    autorunAsync(() => this.search(this.searchText), 1000);

  @observable searchText = "";

  update = (text) => this.searchText = text
}