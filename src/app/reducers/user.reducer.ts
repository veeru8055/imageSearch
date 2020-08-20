import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/user.actions';
import { FavoriteList } from '../interfaces';

export const userFeatureKey = 'user';

export interface State {
  imageData: object;
  searchKeyword: string;
  favoriteList: Array<FavoriteList>;
  selectedList: string;
}

export const initialState: State = {
  imageData: {},
  searchKeyword: '',
  favoriteList: [{listName:'sample',imageList:[]}],
  selectedList: 'sample'
};


export const reducer = createReducer(
  initialState,
  on(actions.loadImages, (state, imageData) => ({ ...state, imageData: imageData.payload })),
  on(actions.updateKeyword, (state, { searchKeyword }) => ({ ...state, searchKeyword: searchKeyword })),
  on(actions.createList, (state, { list }) => ({ ...state, favoriteList: [...state.favoriteList, list] })),
  on(actions.addFavorite, (state, { imageData }) => {
    return { ...state, favoriteList: state.favoriteList.map(data => {
      if(data.listName === imageData.listName) data.imageList.push(imageData.imageList[0]);
      return data;
    }) }
  })
);

