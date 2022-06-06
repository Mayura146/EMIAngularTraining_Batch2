import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoredComponent } from './stored/stored.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
 
    ChildComponent,
    ParentComponent,
    CreateEmployeeComponent,
    EmployeeComponent,
    EmployeeListComponent,
    StoredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
