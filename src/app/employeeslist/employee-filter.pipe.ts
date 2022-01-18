import { Pipe, PipeTransform } from '@angular/core';
import { Employees } from '../employees/employees.model';


@Pipe({

    name: "employeeFilter"

})

export class EmployeeFilterPipe implements PipeTransform{

    transform(employee: Employees[], searchStr: string): Employees[] {

        if (!employee || !searchStr) {
            
            return employee;

        }

        return employee.filter(employee => employee.emplName.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
    }


}



