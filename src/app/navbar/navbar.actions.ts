import {createAction, props} from '@ngrx/store';

const ADD_NOTIFICATION = 'navbar/ADD_NOTIFICATION';

export const addNotification = createAction(ADD_NOTIFICATION, props<{ notification: string }>());
