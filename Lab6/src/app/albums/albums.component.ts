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
  constructor(private albumService : AlbumService ) {
    this.albums = [];
  }

  ngOnInit() : void{
   this.albumService.getAlbums().subscribe(albums => this.albums = albums )
  }
  removeAlbum(album : Album){
    delete this.albums[this.albums.indexOf(album)]
  }
}
