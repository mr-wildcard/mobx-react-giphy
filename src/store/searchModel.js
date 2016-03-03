import { observable } from 'mobx';

export default class SearchModel {

  @observable searchText = "";

  update = (text) => this.searchText = text
}