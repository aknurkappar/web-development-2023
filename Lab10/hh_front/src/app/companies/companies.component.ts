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
    })

  }
  createCompany(value : any){
    var company = {} as Company
    company.name = value.name
    company.description = value.description
    company.city = value.city
    company.address = value.address
    this.companyServise.crateCompany(company).subscribe((data)=>{
      company = data
    })

    window.location.reload()
  }
}
