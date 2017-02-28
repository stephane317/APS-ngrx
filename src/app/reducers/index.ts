import { ActionReducer } from '@ngrx/store';
import { createSelector } from 'reselect';

import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';


import * as fromProgramList from './program';


export interface State {
    programs:  fromProgramList.State;
};

const reducers = {
    programs: fromProgramList.reducer
};

const developementReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(State: any, action, any) {
    return developementReducer(State, action);
}

export const getProgramsState = (state: State) => state.programs;
