import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './user';
import { Observable } from 'rxjs';

@Injectable()

export class ProfileRequestService {


  // tslint:disable-next-line:no-inferrable-types
  fromURL: string = 'https://api.github.com';
  constructor(private http: HttpClient) {
  }

  getUsers(userName: string): Observable<user[]> {
    return this.http.get<user[]>(this.fromURL + '/users/' + userName);

}

}