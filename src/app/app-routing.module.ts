import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-gaurd.service';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { EmployeeDetailsComponent } from './employees/employeedetails.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard.service';
import { EditEmployeeComponent } from './employees/edit-employee.component';

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },

  {
    path: 'create',
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },

  {
    path: 'edit/:id',
    component: EditEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },

  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent,
    canActivate: [EmployeeDetailsGuardService]
  },

  { path: '', redirectTo: '/list', pathMatch: 'full' },

  { path: 'notfound', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
