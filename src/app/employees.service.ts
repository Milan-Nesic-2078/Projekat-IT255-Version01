import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employees: object[];

  constructor() { }

  getEmployees(emplyees: any) {

    this.employees.push(emplyees);

    console.log(this.employees);

  }

}

