import { Action } from '@ngrx/store';
import { Program } from '../models';
import { type } from '../util';


/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
  LOAD_PROGRAMS:           type('[Program] Load programs'),
  LOAD_PROGRAMS_SUCCESS:   type('[Program] Load programs success')
};


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class loadPrograms implements Action {
    type = ActionTypes.LOAD_PROGRAMS;

    constructor(){}
}

export class loadProgramSuccess implements Action {
    type= ActionTypes.LOAD_PROGRAMS_SUCCESS;

    constructor(public payload: Program[]){}
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = loadPrograms | loadProgramSuccess;