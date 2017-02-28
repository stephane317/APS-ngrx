import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';

import { ProgramService } from '../services/program';

import * as program from '../actions/program';

import {Program} from '../models/program';

import 'rxjs/add/operator/switchMap';

//------
//this file get the action from component make the HTTP Request to the API and emit new action to say iit's done correctly or not
//------


@Injectable()
export class ProgramEffect{

    constructor(
        private actions$: Actions,
        private svc: ProgramService
    ){}

    @Effect()
    loadPrograms$: Observable<Action> = this.actions$
        .ofType(program.ActionTypes.LOAD_PROGRAMS)
        .switchMap( () => this.svc.getPrograms() )
        .map( programs => {
            console.log('ProgramEffect.loadPrograms$ ---> ', programs)
            return new program.loadProgramSuccess(programs);
        });

}