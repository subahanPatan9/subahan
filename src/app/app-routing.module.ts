import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { ModifyEmpDetailsComponent } from './modify-emp-details/modify-emp-details.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path:'home',component:HomeComponent},
    {path: 'employeeDetails/:id', component: EmployeeDetailsComponent},
    {path: 'updateEmpDetails', component: ModifyEmpDetailsComponent},
    { path: '**', component: EmployeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
