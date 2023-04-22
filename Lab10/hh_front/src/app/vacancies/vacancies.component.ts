import {Component, OnInit} from '@angular/core';
import {Company, Vacancy} from "../models";
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../company.service";
import {VacancyService} from "../vacancy.service";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {

  vacancies : Vacancy[] = []

  constructor(private route : ActivatedRoute,
              private companyService : CompanyService,
              private vacancyService : VacancyService) {}

  getCompanyVacancies(){
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"))
      this.companyService.getCompanyVacancies(id).subscribe(data => {
        this.vacancies = data
      })
    })
  }

  getVacancies(){
    this.vacancyService.getVacancies().subscribe(data => {
      this.vacancies = data
    })
  }

  ngOnInit(): void {
    if(window.location.href == "http://localhost:4200/vacancies")
      this.getVacancies()
    else
      this.getCompanyVacancies()
  }

}
