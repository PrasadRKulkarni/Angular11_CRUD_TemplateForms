import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;

  // Include a private field _id to keep track of the route parameter value
  private _id;

  //To read the URL parameter value use Angular ActivatedRoute service
  constructor(private _activatedRoute: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _router: Router) { }

  ngOnInit(): void {

    //Using Snapshoe method
    this._id = +this._activatedRoute.snapshot.paramMap.get('id');
    this.employee = this._employeeService.getEmployee(this._id);

    //Using subscribe method to view next employee
    this._activatedRoute.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this.employee = this._employeeService.getEmployee(this._id);
    });
  }

  // Everytime this method is called the employee id value is
  // incremented by 1 and then redirected to the same route
  // but with a different id parameter value
  getNextEmployee() {
    if (this._id < 3) {
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }

    this._router.navigateByUrl('/employees/' + this._id);
  }

}
