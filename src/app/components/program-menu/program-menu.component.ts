import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Program } from '../../models';

import { ActionTypes } from '../../actions/program';

import * as fromRoot from '../../reducers';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-program-menu',
  templateUrl: './program-menu.component.html',
  styleUrls: ['./program-menu.component.css']
})
export class ProgramMenuComponent implements OnInit {

  programs: Observable<Program[]>;
  

  constructor(
    private store: Store<fromRoot.State>,
  ) { 

    this.programs = this.store.select(fromRoot.getProgramsList);

    

    //NOT WORKING WHYYY ?????
    //this.programs = store.select('programList');
    
  }

  ngOnInit() {
    this.store.dispatch({type: ActionTypes.LOAD_PROGRAMS });
  }

  ngOnDestroy() {

  }

}
