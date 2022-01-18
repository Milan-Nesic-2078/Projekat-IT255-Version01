import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeesService } from '../employees.service';
import { Employees } from './employees.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  empl: Employees[] = [];

  date: any;

  public emplO: any;

  nname: any;

  public numb: number = -1;


  constructor(private _emplServices: EmployeeService) { }

  ngOnInit(): void {

    this.emplO = this._emplServices.setEmployees(this.empl);

  }


  addEmployess(emplN: HTMLInputElement, emplL: HTMLInputElement, emplP: HTMLInputElement): void {

    //console.log(`${emplN.value}` + " " + `${emplL.value}` + " " + `${emplP.value}` + " " + " " + this.date.year);

    this.numb += 1;

    this.empl.push(new Employees(this.numb, emplN.value, emplL.value, emplP.value, this.date.day, this.date.month, this.date.year));

    this.nname = this._emplServices.getEmployess();

    console.log(this.numb);

  }


}



