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
  favoriteList: [],
  selectedList: ''
};


export const reducer = createReducer(
  initialState,
  on(actions.loadImages, (state, imageData) => ({ ...state, imageData: imageData.payload })),
  on(actions.updateKeyword, (state, { searchKeyword }) => ({ ...state, searchKeyword: searchKeyword })),
  on(actions.createList, (state, { list }) => ({ ...state, favoriteList: [...state.favoriteList, list] })),
  on(actions.selectList, (state, {selectedList}) => ({...state, selectedList})),
  on(actions.addFavorite, (state, { imageData }) => {
    let index = state.favoriteList.map(data => data.listName).indexOf(imageData.listName);
    return { ...state, favoriteList: [
      ...state.favoriteList.slice(0, index),
        Object.assign({}, state.favoriteList[index], {
            imageList: [...state.favoriteList[index].imageList, imageData.imageList[0]]
        }),
        ...state.favoriteList.slice(index + 1)
    ]}
  }),
  on(actions.editList, (state, { oldListName, list }) => {
    let index = state.favoriteList.map(data => data.listName).indexOf(oldListName);
    return { ...state, favoriteList: [
      ...state.favoriteList.slice(0, index),
        Object.assign({}, state.favoriteList[index], {
            listName: list.listName,
            description: list.description
        }),
        ...state.favoriteList.slice(index + 1)
    ]}
  })
);

