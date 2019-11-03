import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { repositories } from './repositories';
@Injectable()



export class GithubService {

  // tslint:disable-next-line:no-inferrable-types
  baseURL: string = 'https://api.github.com';
  constructor(private http: HttpClient) {
  }

  getRepos(userName: string): kimza<repositories[]> {
       return this.http.get<repositories[]>(this.baseURL + '/users/' + userName + '/repos');
  }
}