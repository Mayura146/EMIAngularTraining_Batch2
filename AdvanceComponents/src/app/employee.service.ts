import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private url='/assets/employee.json';

constructor(private httpClient:HttpClient)
{

}

public getEmployees():Observable<Employee[]>{
  return this.httpClient.get<Employee[]>(this.url);
}
  
}
