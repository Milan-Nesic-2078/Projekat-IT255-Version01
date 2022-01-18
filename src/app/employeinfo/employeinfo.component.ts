import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employees } from '../employees/employees.model';

@Component({
  selector: 'app-employeinfo',
  templateUrl: './employeinfo.component.html',
  styleUrls: ['./employeinfo.component.css']
})
export class EmployeinfoComponent implements OnInit {

  employe: Employees;

  constructor(private _router: ActivatedRoute, private _emplService: EmployeeService) { }

  ngOnInit(): void {

    const id = +this._router.snapshot.params['empId'];

    this.employe = this._emplService.getEmploye(id);

  }

}
