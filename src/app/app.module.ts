import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeypadComponent } from './keypad/keypad.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { keypadReducer } from './keypad.reducer';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    KeypadComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({key: keypadReducer}, {}),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
