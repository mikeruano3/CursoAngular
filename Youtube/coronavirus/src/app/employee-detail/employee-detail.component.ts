import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor( private employeeService: EmployeeService ) {}

  public employees = [];
  public errorMsg;

  ngOnInit(): void {
    this.employeeService.getEmployees()
          .subscribe(data => this.employees = data,
                    error => this.errorMsg = error);
  }

}
