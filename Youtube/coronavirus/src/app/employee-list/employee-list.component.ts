import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  public employees = [];
  public errorMsg;

  ngOnInit(): void {
    this.employeeService.getEmployees()
          .subscribe(data => this.employees = data,
                    error => this.errorMsg = error);
  }

}
