import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employee:Employee;
@Output() addemployeeRecord:EventEmitter<Employee>=new EventEmitter<Employee>();
  constructor() { 
    this.employee=new Employee();
  }

  ngOnInit(): void {
  }

  public addEmployee()
  {
    const data={
     id:this.employee.id,
      employeeName:this.employee.employeeName,
      projectId:this.employee.projectId,
      angularProficiency:this.employee.angularProficiency
    };

    this.addemployeeRecord.emit(data);
  }
}
