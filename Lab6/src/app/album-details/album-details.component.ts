import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ALBUMS} from "../albums-database";
import {Album} from "../Album";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{
  album : Album;
  newTitle : String = "";

  constructor(private route : ActivatedRoute) { // injectable classes - ActivatedRoute
    this.album = {} as Album;
  }

  saveChanges(){
    this.album.title = this.newTitle
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { //
      const id = Number(params.get("id"))
      this.album = ALBUMS.find(album => album.id === id) as Album;
    })

  }

}
