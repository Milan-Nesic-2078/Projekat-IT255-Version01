import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent implements OnInit {


  images: string = "assets/icons/images.png";

  searchStr: string;

  emplArr: any = [];

  num: number = 1;


  constructor(private _emplService: EmployeeService, private _router: Router) {

  }



  ngOnInit(): void {

    this.emplArr = this._emplService.getEmployess();

  }

  onclick(reff: any) {

    delete this.emplArr[reff.empId];

  }


  emplInfo(empId: number) {

    this._router.navigate(["employeinfo", empId]);

  }

}

