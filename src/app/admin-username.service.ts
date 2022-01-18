import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminUsernameService {

    getUsrnm(){

        return localStorage.getItem('token');


    }


    
}
