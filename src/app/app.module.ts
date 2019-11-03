import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './git-hub-service'
import {ProfileRequestService} from './profile-request';
import { RouterModule, Routes } from '@angular/router';
import { AlertService } from './alert-service';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],

  bootstrap: [AppComponent]
})
export class AppModule {}