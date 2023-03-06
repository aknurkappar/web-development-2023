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

  constructor(private route : ActivatedRoute, private albumService : AlbumService) { // injectable classes - ActivatedRoute
    this.album = {} as Album;
  }

  saveChanges(){
    if(this.newTitle.length > 0)
      this.album.title = this.newTitle
  }
  ngOnInit() {
    this.getAlbum()

  }
  getAlbum(){
    this.route.paramMap.subscribe(params => { //
      const id = Number(params.get("id"))
      this.albumService.getAlbum(id).subscribe(album => this.album = album)
    })
  }
}
