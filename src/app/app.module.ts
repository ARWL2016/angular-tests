import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UserService } from './model';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
