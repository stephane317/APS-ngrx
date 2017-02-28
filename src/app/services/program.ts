import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Program } from '../models';

import 'rxjs/add/operator/map';

@Injectable()
export class ProgramService {

    constructor(
        private http: Http
        ){}

    getPrograms(): Observable<Program[]> {
        return this.http.get('./app/config/programs.json').map(res => res.json());
    }
}