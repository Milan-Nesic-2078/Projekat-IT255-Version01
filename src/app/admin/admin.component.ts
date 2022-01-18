import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminsService } from '../admins.service';
import { Admin } from './admin.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admins: Admin[] = [];

  public obj: any;

  loginForm = new FormGroup({

    user: new FormControl('', Validators.required),

    pass: new FormControl('', Validators.required)

  });

  get user(){

    return this.loginForm.get('user');


  }


  get pass(){

    return this.loginForm.get('pass');

  }


  constructor(private _adminsService: AdminsService) { 
  }
  

  ngOnInit(){

    this.obj = this._adminsService.setAdmins(this.admins);


  }

  addAdmin(name: HTMLInputElement, pass: HTMLInputElement){

    //console.log(`Adding article title: ${name.value} and link: ${pass.value} ${pol.value}`);

    this.admins.push(new Admin(name.value, pass.value));

    return false;

  }
  

}






