import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { AllSongsComponent} from './all-songs/all-songs.component';
import { SingleSongComponent} from './single-song/single-song.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginRegComponent},
  { path: 'all_songs', component: AllSongsComponent },
  { path: 'users', component: UsersComponent},
  { path: 'songs/:id',component: SingleSongComponent},
  { path: 'users/:id', component: UsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
