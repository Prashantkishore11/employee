import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService{
    employee = [
        {id:1,name:'abc',dept:'CSE'},
        {id:2,name:'bcd',dept:'ME'},
        {id:3,name:'cde',dept:'EE'}
    ]
    getEmployee()
    {
        return this.employee;
    }
    setEmployee(emp)
    {
        this.employee.push(emp)

    }
}