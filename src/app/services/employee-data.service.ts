import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private http: HttpClient) { }
  url1 = 'https://reqres.in/api/users?page=1';
  url2 = 'https://reqres.in/api/users?page=2';

  // fetchDetails() { 
  //   return this.http.get(this.url1);
  // }
  fetchDetails1(val) { 
    return this.http.get(`https://reqres.in/api/users?page=${val}`);
  }

  getEmployeeDetails() {
    return this.http.get('assets/data/employee-details.json')
  }

  getEmployeeList() {
    return JSON.parse(sessionStorage.getItem('employeeList'));
  }

  setEmployeeList(employeeList) {
    sessionStorage.setItem('employeeList', JSON.stringify(employeeList));
  }

  
    


}
