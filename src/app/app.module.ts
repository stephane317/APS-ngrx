import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {AppRoutes} from './app.routes';


import { AppComponent } from './app.component';

import {ProgressBarModule} from 'primeng/primeng';


import { ProgramMenuComponent } from './components/program-menu/program-menu.component';
import { ProgramService } from './services';
import { ProgramEffect } from './effects';

import { reducer } from './reducers';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Apptopbar } from './components/apptopbar/apptopbar.component';

import {AppMenuComponent,AppSubMenu}  from './app.menu.component';
import {AppFooter}  from './app.footer.component';





@NgModule({
  declarations: [
    AppComponent,
    ProgramMenuComponent,
    Apptopbar,
    AppMenuComponent,
    AppSubMenu,
    AppFooter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes,
    HttpModule,
    ProgressBarModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    EffectsModule.run(ProgramEffect)
  ],
  providers: [ProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
