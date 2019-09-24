import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-newapp-list',
  templateUrl: './newapp-list.component.html',
  styleUrls: ['./newapp-list.component.css']
})
export class NewappListComponent implements OnInit {

  constructor(private employee: EmployeeService) { }

  ngOnInit() {
    this.employeeDetail = this.employee.getEmployee()
  }

  employeeDetail=[

  ]
}
