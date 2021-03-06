import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: '3',
      isActive: false,
      photoPath: 'assets/images/john.png'
    },
  ];

  //Getting array of employees.
  //In real world we would be using Observable.

  // getEmployees(): Employee[] {
  //   return this.listEmployees;
  // }

  getEmployees(): Observable<Employee[]> {
    //This is for calling hard coded Array of Employees
    return of(this.listEmployees);
  }

  getEmployee(id: number): Employee {
    return this.listEmployees.find(e => e.id === id);
  }

  save(employee: Employee) {
    this.listEmployees.push(employee);
  }

  update(employee: Employee) {
    const index = this.listEmployees.findIndex(x => x.id === employee.id);
    this.listEmployees[index] = employee;

  }

  deleteEmployee(id: number) {
    const i = this.listEmployees.findIndex(e => e.id === id);
    this.listEmployees.splice(i, 1);
  }

  getMaxId(): number {
    let max = 0;
    this.listEmployees.forEach(character => {
      if (character.id > max) {
        max = character.id;
      }
    });

    return max;
  }

}
