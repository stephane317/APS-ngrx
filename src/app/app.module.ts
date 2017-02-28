import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';

import { ProgramMenuComponent } from './components/program-menu/program-menu.component';
import { ProgramService } from './services';
import { ProgramEffect } from './effects';

import { reducer } from './reducers';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';




@NgModule({
  declarations: [
    AppComponent,
    ProgramMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
