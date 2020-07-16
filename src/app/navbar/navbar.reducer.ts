import {createReducer, on} from '@ngrx/store';
import {navbarState} from './navbar.state';
import {addNotification} from './navbar.actions';

export const reducer = createReducer(
  navbarState,
  on(addNotification, (state, {notification}) => ({...state, notifications: [notification, ...state.notifications]}))
);
