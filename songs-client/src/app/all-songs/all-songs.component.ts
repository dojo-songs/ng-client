import { Component, OnInit } from '@angular/core';
import { AllSongsService } from '../all-songs.service';



@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.css']
})
export class AllSongsComponent implements OnInit {
  userName: string;
  userId: Number;
  mySongs: object[];
  addSongData: object ={
    title: '',
    artist: ''
  }
  errors:string[];

  constructor(private allsongService: AllSongsService) {
    this.userName = 'Cam';
    this.userId = 1;
   }

  ngOnInit() {
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

}