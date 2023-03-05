import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    HomeComponent,
    AboutComponent,
    AlbumDetailsComponent,
    AlbumPhotosComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    AlbumsComponent,
    HomeComponent,
    AboutComponent,
    AlbumDetailsComponent,
    AlbumPhotosComponent]
})
export class AppModule { }
