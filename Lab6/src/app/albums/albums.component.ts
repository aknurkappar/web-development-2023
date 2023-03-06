import {Component, OnInit} from '@angular/core';
import {Album} from "../Album";
import {ALBUMS} from "../albums-database";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{

  albums: Album[];
  constructor() {
    this.albums = [];
  }

  ngOnInit() : void{
    this.albums = ALBUMS;

  }
  removeAlbum(album : Album){
    delete this.albums[this.albums.indexOf(album)]
  }

}
