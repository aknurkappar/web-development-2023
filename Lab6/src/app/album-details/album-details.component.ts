import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Album} from "../Album";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{
  album : Album;
  newTitle : String = "";
  loading : boolean = false;

  constructor(private route : ActivatedRoute, private albumService : AlbumService) { // injectable classes - ActivatedRoute
    this.album = {} as Album;
  }
  ngOnInit() {
    this.getAlbum()
  }
  getAlbum(){
    this.route.paramMap.subscribe(params => {
      this.loading = true;
      const id = Number(params.get("id"))
      this.albumService.getAlbum(id).subscribe(album => {
        this.album = album
        this.loading = false;
      })
    })
  }

  updateAlbum() {
    if (this.newTitle.length > 0) {
      this.route.paramMap.subscribe(params => {
        this.loading = true;
        this.albumService.updateAlbum(this.album).subscribe(album => {
          this.album.title = this.newTitle
          this.loading = false;
        })
      })
    }
  }
}
