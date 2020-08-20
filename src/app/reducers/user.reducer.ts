import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface State {
  currentWindow: string
}

export const initialState: State = {
  currentWindow: 'search'
};


export const reducer = createReducer(
  initialState,
  on(actions.switchSearch, state => ({ ...state, currentWindow: 'search' })),
  on(actions.switchFavorite, state => ({ ...state, currentWindow: 'favorite' })),

);

