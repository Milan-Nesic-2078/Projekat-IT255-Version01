import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  adminss: any = [];

  constructor() { 

  }

  setAdmins(arr){

    this.adminss = arr;

  }

  getAdmins(): any{

    return this.adminss;


  }


}

