import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

//Test
@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees: Employee[], searchTerm: string): Employee[] {
    if (!employees || !searchTerm) {
      return employees;
    }

    return employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
