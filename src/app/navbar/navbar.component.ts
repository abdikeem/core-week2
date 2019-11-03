import { Observable} from 'rxjs';
import { repositories} from '../repositories';
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { GithubService } from '../git-hub-service';
import {environment} from '../../environments/environment';
import {ProfileRequestService} from '../profile-request';
import { user } from '../user';
import { AlertService } from '../alert-service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ GithubService, ProfileRequestService, AlertService]
})
export class DashboardComponent implements OnInit {
  userName = 'peter-wachira';
  repos: repositories[];
  users: user[];

  loading = false;
  errorMessage;
  windowScrolled: boolean;
  constructor( private githubService: GithubService, private profileRequest: ProfileRequestService, private alertService: AlertService, @Inject(DOCUMENT) private document: Document ) {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  scrollToTop() {
      (function smoothscroll() {
          const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
          })();
      }

public getRepos(event: any) {
  this.loading = true;
  let promise = new Promise((resolve , reject) => {
   this.githubService.getRepos (this.userName).toPromise().then(response => {
     this.repos = response; this.loading = false;]
      resolve();
    },
    error => {
      this.errorMessage = 'An error was encountered';
      this.loading = false;
    }
  );
  });
  return promise;
}
public getUsers(event: any) {
  this.loading = true;
  let promise = new Promise((resolve , reject) => {
   this.profileRequest.getUsers(this.userName).toPromise().then(response => {
     this.users = response; this.loading = false;
      resolve();
    },
    error => {
      this.errorMessage = 'An error was encountered';
      this.loading = false;
    }
  );
  });
  return promise;
}


  ngOnInit() {
  }

}