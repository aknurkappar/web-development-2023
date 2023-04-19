import {Component, Input, OnInit} from '@angular/core';
import {Company} from "../models";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit{

  companies : Company[] = []

  constructor(private companyServise : CompanyService) {
  }
  ngOnInit(): void {
    this.companyServise.getCompanies().subscribe((data)=>{
      this.companies = data
      console.log(this.companies)
    })

  }

  goToCompanyDetails(id : number){

  }
}
