import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from "./Album";
import {Photo} from "./Photo";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private client : HttpClient) { }

  // CRUD (create / read / update / delete)

  getAlbums() : Observable<Album[]>{
    return this.client.get<Album[]>("https://jsonplaceholder.typicode.com/albums");
  }

  getAlbum(id : number) : Observable<Album>{
    return  this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }

  getPhotos(id : number) : Observable<Photo[]>{
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }

  updateAlbum(album : Album) : Observable<Album>{
    return this.client.put<Album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`, album)
  }

  deleteAlbum(album : Album) : Observable<Album>{
    return this.client.delete<Album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`)
  }
  addAlbum(album : Album) : Observable<Album>{
    return this.client.post<Album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`, album)
  }
}
