import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  _id: number;

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: "-1",
    isActive: null,
    photoPath: null,
    password: null,
    confirmPassword: null
  };


  // We do not want to render the image element when the form first loads.
  previewPhoto: boolean = false;


  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];

  // create a property of type Partial<BsDatepickerConfig>
  datePickerConfig: Partial<BsDatepickerConfig>;

  //Route Guard to prompt - Are you sure to discard changes of filled form.
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  //@ViewChild('employeeForm', { static: true }) public createEmployeeForm: NgForm;

  constructor(private _empService: EmployeeService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    // In the constructor set containerClass property to the preferred theme
    private cdr: ChangeDetectorRef) {

    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY'
      });
  }



  ngOnInit(): void {

    this._id = +this._activatedRoute.snapshot.paramMap.get('id');
    this.employee = this._empService.getEmployee(this._id);


  }

  saveEmployee(newEmployee: Employee): void {
    //console.log(newEmployee);
    //console.log(this._empService.getMaxId());
    newEmployee.id = (this._empService.getMaxId()) + 1;

    this._empService.save(newEmployee);

    //this._router.navigate(['list']);
    this._router.navigateByUrl('/list');
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  //Ignore this piece of code. This is just to handle one error from console.
  ngAfterContentChecked() {
    this.cdr.detectChanges();
    // call or add here your code
  }

}
