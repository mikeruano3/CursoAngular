import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url = '';
  constructor(private http: HttpClient) { }

  enroll(person: Person) {
    return this.http.post<any>(this.url, person);
  }
}
