import { createAction, props } from '@ngrx/store';
import { FavoriteList } from '../interfaces';

export const updateKeyword = createAction('Update Search Keyword', props<{searchKeyword: string}>());
export const loadImages = createAction('[Images API] Images Loaded Success', props<any>());
export const createList = createAction('Create new List', props<{list: FavoriteList}>());
export const addFavorite = createAction('Add Favorite Image', props<{imageData: FavoriteList}>());
export const selectList = createAction('Select list', props<{selectedList: string}>());
export const editList = createAction('Edit List', props<{oldListName: string, list: FavoriteList}>());