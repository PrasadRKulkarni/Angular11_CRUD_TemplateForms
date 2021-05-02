import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];

  dataFromChild: Employee;

  searchTerm: string;

  constructor(private _empService: EmployeeService,
    private _router: Router) { }

  ngOnInit(): void {
    //This is when we return array
    //this.employees = this._empService.getEmployees();

    //This is when we return Observable in applns.
    this._empService.getEmployees().subscribe((empList) => {
      this.employees = empList;
    });
  }


  //Data is passent from child to parent in eventData.
  handleNotify(eventData: Employee) {
    this.dataFromChild = eventData;
  }


  onClick(employeeId: number) {
    //this._router.navigate(['/employees', employeeId]);
    this._router.navigateByUrl('/employees/' + employeeId);
  }
}
