import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router'; 
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminsService } from './admins.service';
import { AdminUsernameService } from './admin-username.service';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { EmployeeService } from './employee.service';
import { EmployeeFilterPipe } from './employeeslist/employee-filter.pipe';
import { EmployeinfoComponent } from './employeinfo/employeinfo.component';
import { EmployeesService } from './employees.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    AdminpanelComponent,
    AdminNavBarComponent,
    EmployeesComponent,
    EmployeeslistComponent,
    EmployeeFilterPipe,
    EmployeinfoComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    
    RouterModule.forRoot([
       
    {path:"", component: HomeComponent},
    {path:"adminform", component: AdminComponent},
    {path:"login", component: LoginComponent},
    {path:"adminpanel", component: AdminpanelComponent},
    {path: "employees", component: EmployeesComponent},
    {path: "employeeslist", component: EmployeeslistComponent},
    {path: "employeinfo/:empId", component: EmployeinfoComponent}
    
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AdminsService, AdminUsernameService, EmployeeService, EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
