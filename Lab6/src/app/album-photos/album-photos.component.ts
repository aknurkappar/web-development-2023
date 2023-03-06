import {Component, OnInit} from '@angular/core';
import {Photo} from "../Photo";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{

  photos : Photo[];
  loading : boolean = false;

  constructor(private route : ActivatedRoute, private albumService : AlbumService) { // injectable classes - ActivatedRoute
    this.photos = {} as Photo[];
  }

  ngOnInit() {
    this.getPhotos()
  }

  getPhotos(){
    this.route.paramMap.subscribe(params => {
      this.loading = true;
      const id = Number(params.get("id"))
      this.albumService.getPhotos(id).subscribe(photos => {
        this.photos = photos;
        this.loading = false;
      })
    })
  }
}
