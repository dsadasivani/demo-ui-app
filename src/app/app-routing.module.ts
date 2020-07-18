import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListCompanyComponent } from './list-company/list-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {component: HomeComponent, path: ''},
  {component: AddCompanyComponent, path: 'add'},
  {component: UpdateCompanyComponent, path: 'update/:id'},
  {component: ListCompanyComponent, path: 'list'},
  {component: LoginComponent, path: 'login'},
  {component: RegisterComponent, path: 'register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
