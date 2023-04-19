import { Component } from '@angular/core';
import {Company, Vacancy} from "../models";
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent {

  vacancies : Vacancy[] = []

  constructor(private route : ActivatedRoute, private companyServise : CompanyService) {
  }

  getCompany(){
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"))
      this.companyServise.getCompanyVacancies(id).subscribe(data => {
        this.vacancies = data
      })
    })
  }

  ngOnInit(): void {
    this.getCompany()
  }

}
