import { Component, OnInit } from '@angular/core';
import { AdminUsernameService } from '../admin-username.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usrnName: string;

  imgs1: string = "assets/icons/adminicon.png/";

  imgs2: string = "assets/icons/loginicon.png";

  constructor(private _adminUser: AdminUsernameService){}

  ngOnInit(){

     return this.usrnName = this._adminUser.getUsrnm();

  }

   
}

  




  




