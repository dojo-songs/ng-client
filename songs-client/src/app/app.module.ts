import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddSongComponent } from './add-song/add-song.component';
import { AllSongsComponent } from './all-songs/all-songs.component';
import { SingleSongComponent } from './single-song/single-song.component';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginRegComponent,
    NavbarComponent,
    AddSongComponent,
    AllSongsComponent,
    SingleSongComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
