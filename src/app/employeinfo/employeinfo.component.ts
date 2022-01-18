import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employees } from '../employees/employees.model';
import { NgRedux, select } from 'ng2-redux';
import { ApState } from '../store';
import { ADD_VALUE } from '../action';

@Component({
  selector: 'app-employeinfo',
  templateUrl: './employeinfo.component.html',
  styleUrls: ['./employeinfo.component.css']
})
export class EmployeinfoComponent implements OnInit {

  employe: Employees;

  @select() iznos;
  @select() datum;

  constructor(private _router: ActivatedRoute, private _emplService: EmployeeService, private _ngRedux: NgRedux<ApState>) { }

  ngOnInit(): void {

    const id = +this._router.snapshot.params['empId'];

    this.employe = this._emplService.getEmploye(id);

  }

  addValue() {



    this._ngRedux.dispatch({ type: ADD_VALUE });

    console.log(this.datum);


  }

  printDocument() {

     window.print();


  }

}
