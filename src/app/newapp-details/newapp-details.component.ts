import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-newapp-details',
  templateUrl: './newapp-details.component.html',
  styleUrls: ['./newapp-details.component.css']
})
export class NewappDetailsComponent implements OnInit {

  constructor(private employee: EmployeeService) { }

  ngOnInit() {
    this.employeeDetail = this.employee.getEmployee()
  }

  employeeDetail=[

  ]
}
