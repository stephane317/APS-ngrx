import { ActionReducer, Action } from '@ngrx/store';

import { Program } from '../models/program';
import * as program from '../actions/program';


export interface State {
    selectedProgramCode: string,
    selectedProgramLetter: string,
    programList: Program[]
}

export const initialState: State = {
    selectedProgramCode: null,
    selectedProgramLetter: null,
    programList: []
}

export function reducer(state= initialState, action: program.Actions): State {
    switch (action.type) {
        case program.ActionTypes.LOAD_PROGRAMS: {
            console.log("ActionTypes.LOAD_PROGRAMS")
            return state;
        }

        case program.ActionTypes.LOAD_PROGRAMS_SUCCESS: {
            console.log("ActionTypes.LOAD_PROGRAMS_SUCCESS, payload :", action.payload)
            const programs = action.payload;

            return Object.assign({}, state, programs);
        }

        default: {
            return state;
        }
    }
}



