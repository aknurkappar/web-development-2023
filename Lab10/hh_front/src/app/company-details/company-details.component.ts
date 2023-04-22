import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../company.service";
import {Company} from "../models";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent  implements OnInit{

  company : Company

  constructor(private route : ActivatedRoute, private companyServise : CompanyService) {
    this.company = {} as Company
  }

  getCompany(){
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"))
      this.companyServise.getCompany(id).subscribe(data => {
        this.company = data
      })
    })
  }

  updateCompany(value : any, id : number){
    let updatedCompany = {} as Company
    updatedCompany.name = value.name
    updatedCompany.description = value.description
    updatedCompany.city = value.city
    updatedCompany.address = value.address

    console.log(updatedCompany)
    console.log(value)
    this.companyServise.updateCompany(updatedCompany, id).subscribe(data => {})
    window.location.reload()
  }

  deleteCompany(id : number){
    this.companyServise.deleteCompany(id).subscribe(data => {
      this.company = data
    })
    window.location.href = "/companies"
  }

  ngOnInit(): void {
    this.getCompany()
  }

}
