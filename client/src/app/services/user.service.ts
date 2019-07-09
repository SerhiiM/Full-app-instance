import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';
import {BehaviorSubject} from 'rxjs';

const SERVER_PATH = 'http://127.0.0.1:8080';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList$ = new BehaviorSubject <User[]> ([]);

  constructor(private http: HttpClient) {

  }

  fetch() {
    this.http.request('GET', `${SERVER_PATH}/users`).subscribe( (data: User[]) => this.userList$.next(data));
  }

  create(name) {
    this.http.request('POST', `${SERVER_PATH}/users`, { body: { name }}).subscribe(() => this.fetch());
  }

  update(id, name) {
    this.http.request('PUT', `${SERVER_PATH}/users/${id}`, { body: { name }}).subscribe(() => this.fetch());
  }

  delete(id) {
    this.http.request('DELETE', `${SERVER_PATH}/users/${id}`).subscribe(() => {
      this.fetch();
    });
  }
}
