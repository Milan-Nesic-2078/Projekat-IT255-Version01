import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminUsernameService } from '../admin-username.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  usrnStr: string;

  imgs1: string = "assets/icons/employeeicon.png";

  imgs2: string = "assets/icons/listsicon.png";

  imgs3: string = "assets/icons/logouticon.png";

  constructor(private _adminUsrnService: AdminUsernameService, private router: Router) { }

  ngOnInit(): void {

    this.usrnStr = this._adminUsrnService.getUsrnm();

  }

  logOut(){

    localStorage.removeItem('token');

    this.router.navigate([`login`]);

  }

}
