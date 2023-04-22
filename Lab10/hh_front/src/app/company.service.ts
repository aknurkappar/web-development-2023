import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = "http://127.0.0.1:8000/api"

  constructor(private client : HttpClient) {

  }

  getCompanies() : Observable<Company[]>{
    return this.client.get<Company[]>(`${this.BASE_URL}/companies`)
  }

  getCompany(id: number): Observable<Company> {
    return this.client.get<Company>(`${this.BASE_URL}/companies/${id}/`)
  }

  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/companies/${id}/vacancies`)
  }

  updateCompany(updatedCompany : Company, id : number) : Observable<Company>{
    return this.client.put<Company>(`${this.BASE_URL}/companies/${id}/`, updatedCompany)
  }

  deleteCompany(id: number): Observable<Company> {
    return this.client.delete<Company>(`${this.BASE_URL}/companies/${id}/`)
  }
  crateCompany(company : Company):  Observable<Company> {
    return this.client.post<Company>(`${this.BASE_URL}/companies/`, company)
  }
}
