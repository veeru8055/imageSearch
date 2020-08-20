import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/user.reducer';

export const selectWindow = (state: State) => state.currentWindow;
