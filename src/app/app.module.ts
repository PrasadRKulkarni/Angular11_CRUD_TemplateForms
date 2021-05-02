import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { FormsModule } from '@angular/forms';
import { ValidateEqualModule } from 'ng-validate-equal';
import { DisplayemployeeComponent } from './employees/displayemployee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-gaurd.service';
import { EmployeeDetailsComponent } from './employees/employeedetails.component';
import { EmployeeFilterPipe } from './employees/Pipes/employee-filter.pipe';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard.service';
import { EmployeeService } from './service/employee.service';
import { EditEmployeeComponent } from './employees/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayemployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    PageNotFoundComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    //This is for validating password & confirm password match
    ValidateEqualModule,
  ],
  providers: [CreateEmployeeCanDeactivateGuardService, EmployeeDetailsGuardService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
