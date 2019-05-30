import { Component, OnInit } from '@angular/core';
import { AllSongsService } from '../all-songs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { NavbarComponent } from '../navbar/navbar.component';



@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.css']
})
export class AllSongsComponent implements OnInit {
  userName: string;
  userId: string;
  mySongs: object[];
  
  addSongData: object ={
    title: '',
    artist: ''
  }
  addSongPlaylistData: object = {
    user_id:'',
    song_id:''
  }

  errors:string[];



  constructor(
    private allsongService: AllSongsService,
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    this.userId = localStorage.getItem('user_id');
    if(this.userId == null){
      console.log('user not logged in');
      this.router.navigate(['main'])
    }
    else{
      this.userName = localStorage.getItem('first_name');
      this.addSongPlaylistData['user_id'] = this.userId;
    }
    this.getSongs();
  }

  addSong(){
    this.allsongService.createSong(this.addSongData)
    .subscribe(
      data => {
        console.log('added song to db');
        console.log(data); 
        this.getSongs()
      },
      errors => {
        console.log('error adding song');
        console.log(errors);
        this.errors = errors;
      }
    )
    this.addSongData['title'] = '';
    this.addSongData['artist'] = '';
  }

  getSongs(){
    this.allsongService.getSongs()
    .subscribe(
      data => {
        console.log('got all songs');
        this.mySongs = data;
        console.log(this.mySongs);
      },
      errors => {
        console.log('error getting songs');
        console.log(errors);
        this.errors = errors;
      }
    )
  }
  addSongToPlaylist(songId: string){
    this.addSongPlaylistData['song_id'] = songId;
    console.log(this.addSongPlaylistData);
    this.userService.addToList(this.addSongPlaylistData)
    .subscribe(
      data => {
        console.log('successfully added song to user playlist');
        console.log(data);
        this.getSongs();
      },
      errors => {
        console.log('error adding song to playlist');
        console.log(errors);
        this.errors = errors;
      }
    )
  }

}