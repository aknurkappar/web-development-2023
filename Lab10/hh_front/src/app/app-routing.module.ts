import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompaniesComponent} from "./companies/companies.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {CompanyDetailsComponent} from "./company-details/company-details.component";

const routes: Routes = [
  {path: 'companies', component: CompaniesComponent},
  {path: 'vacancies', component: VacanciesComponent},
  {path: '', redirectTo : "companies", pathMatch : "full"},
  {path: 'companies/:id', component: CompanyDetailsComponent},
  {path: 'companies/:id/vacancies', component: VacanciesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
