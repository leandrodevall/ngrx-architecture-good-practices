import {
    createAction,
    createFeatureSelector,
    createReducer,
    createSelector,
    on,
} from '@ngrx/store';

import * as UserActions from "./user.action";

export interface UserState {
    showUserName: boolean;
}

const userInitialState: UserState = {
    showUserName: false,
};

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getShowUserCode = createSelector(
    getUserFeatureState,
    (state) => state.showUserName
);

export const userReducer = createReducer<UserState>(
    userInitialState,
    on(UserActions.toggleUserName, (state: UserState) => {
        console.log('original state:', state);
        return {
            ...state,
            showUserName: !state.showUserName,
        };
    })
);
