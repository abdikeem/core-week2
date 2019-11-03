import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { git-hub.service } from './git-hub.service';
import {ProfileRequest} from './profile-request';
import { RouterModule, Routes } from '@angular/router';
import { alertservice } from './alert-service';

const routes: Routes = [
  
];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  // providers: [ GithubService, ProfileRequestService],

  bootstrap: [AppComponent]
})
export class AppModule { }