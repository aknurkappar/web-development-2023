import { Injectable } from '@angular/core';
import {Vacancy} from "./models";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = "http://127.0.0.1:8000/api"
  constructor(private client : HttpClient) { }

  getVacancies() : Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/vacancies/`)
  }
}
