import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: any = {
    first_name: null,
    id: null,
  }
  user$ = new BehaviorSubject<any>({
    first_name: null,
    id: null,
  })
  baseURL: string = 'http://localhost:8000/users'
  constructor(private http: HttpClient) { }

  createUser(userData: object): Observable<any> {
    return this.http.post<object>(`${this.baseURL}/create/`, userData);
  }

  loginUser(loginData: object): Observable<any> {
    return this.http.post<object>(`${this.baseURL}/login/`, loginData);
  }

  addToList(playlistData: object) {
    return this.http.post<object>(`${this.baseURL}/songs/add/`, playlistData);
  }

  getUserPlaylist(userPlaylistData: object){
    return this.http.post<object>(`${this.baseURL}/playlist/`, userPlaylistData)
  }


  logout(): void {
    localStorage.clear();
  }
}
