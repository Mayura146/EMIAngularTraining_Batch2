import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee.model';


const apiUrl=environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private handleError(errorResponse:HttpErrorResponse)
  {
    if(errorResponse.error instanceof ErrorEvent)
    {
      console.log('Client Side Error',errorResponse.error);
    }

    else
    {
      console.log('Server Side Error',errorResponse.error)
    }
    return throwError('Their is a problem in ur code');
  }
  constructor(private http:HttpClient) { }
  public getEmployees():Observable<Employee[]>{

    return this.http.get<Employee[]>(apiUrl).pipe(catchError(this.handleError));
  }

  public getEmployeeById(id:number):Observable<Employee>{
    const url=`${apiUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(catchError(this.handleError));
  }
}
