import {Component, OnInit} from '@angular/core';
import {Album} from "../Album";

import {AlbumService} from "../album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{

  albums: Album[];
  loading : boolean = false;
  constructor(private albumService : AlbumService ) {
    this.albums = [];
  }

  ngOnInit() : void{
    this.getAlbums()
  }
  getAlbums(){
    this.loading = true;
    this.albumService.getAlbums().subscribe(albums => {
      this.albums = albums
      this.loading = false;
    })
  }

  deleteAlbum(album : Album){
    this.loading = true;
    delete this.albums[this.albums.indexOf(album)]
    this.albumService.deleteAlbum(album).subscribe(      () => this.loading = false)
  }
}
