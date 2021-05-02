import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-displayemployee',
  templateUrl: './displayemployee.component.html',
  styleUrls: ['./displayemployee.component.css']
})
export class DisplayemployeeComponent implements OnInit {

  confirmDelete: boolean = false;
  @Input() employee: Employee;

  //Ouput parameter to pass data from child to parent.
  //The child component raises an event to pass data to the parent component.
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private _router: Router, private _empService: EmployeeService,) { }

  ngOnInit(): void {
  }


  handleClick() {
    //Pass employee object to parent as a event.
    this.notify.emit(this.employee);
  }

  //Pass data from child to parent using template reference variable.
  getNameAndGender(): string {
    return this.employee.name + ' is ' + this.employee.gender;
  }


  viewEmployee() {
    this._router.navigateByUrl('/employees/' + this.employee.id);
  }

  editEmployee(id: number) {
    this._router.navigateByUrl('/edit/' + id);
  }


  deleteEmployee(id: number) {
    this._empService.deleteEmployee(id);
    this._empService.getEmployees();
  }

  setConfirmDelete() {
    this.confirmDelete = true;
    event.stopPropagation();
  }

  setConfirmDeleteNo() {
    this.confirmDelete = false;
    event.stopPropagation();
  }

}
