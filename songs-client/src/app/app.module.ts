import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginRegComponent } from './login-reg/login-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginRegComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
