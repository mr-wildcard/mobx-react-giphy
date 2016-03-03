import SearchModel from './searchModel';

export const createStore = () => ({
  searchModel: new SearchModel()
});