import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../company.service";
import {Company} from "../models";
import {ActivatedRoute} from "@angular/router";

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

  ngOnInit(): void {
    this.getCompany()
  }

}
