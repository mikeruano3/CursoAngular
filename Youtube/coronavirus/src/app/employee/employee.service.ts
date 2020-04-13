import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError  } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = '/assets/data/employeesTest.json';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url)
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error!');
  }
}
