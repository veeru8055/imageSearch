import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction(
  '[User] Load Users'
);

export const switchSearch = createAction ('[User] Switch Search');
export const switchFavorite = createAction ('[User] Switch Favorite');


