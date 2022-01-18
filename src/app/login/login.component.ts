import { Component, OnInit } from '@angular/core';
import { AdminUsernameService } from '../admin-username.service';
import { AdminsService } from '../admins.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public obj: string;

  public obj1: any;

  userName: any;

  constructor(private _adminService: AdminsService, private _adminUsername: AdminUsernameService, private router: Router) { }

  

  ngOnInit(){

      this.obj = this._adminService.getAdmins();

  }


  chekAdmin(ussrn: HTMLInputElement, passs: HTMLInputElement, routNmae: String){

    //this.obj1 = this._adminUsername.setName(`${nam.value}`);

    this.userName = this._adminService.getAdmins();

    try {

      if (this.userName[0].name == ussrn.value && this.userName[0].pass == passs.value) {

        this.router.navigate([`${routNmae}`]);

        localStorage.setItem('token', ussrn.value);

      }

      if(this.userName[0].name !== ussrn.value || this.userName[0].pass !== passs.value) throw "Podaci nisu ispravni!";

      if(ussrn.value == "" || passs.value == "") throw "Podaci nisu ispravni!";


    } catch (error) {
      
        alert(error);
        

    }    
    
    return false;

  }

}



