import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {AlbumsComponent} from "./albums/albums.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AlbumDetailsComponent} from "./album-details/album-details.component";


const routes : Routes = [
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "albums", component: AlbumsComponent},
  {path: "albums/:id", component: AlbumDetailsComponent},
  {path: "", redirectTo: "home", pathMatch:  "full"},
  {path: "**", component: NotFoundComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
