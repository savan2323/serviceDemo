import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';
@Component({
  selector: 'app-employee-list',
  //templateUrl: './employee-list.component.html',
  template: `
      <h2>Employee List</h2>
      <ul *ngFor="let employee of employees">
        <li>{{employee.name}}</li>
      </ul>
  
  `,
  //styleUrls: ['./employee-list.component.css']
  styles: []
})
export class EmployeeListComponent implements OnInit {

  employeeList: IEmployee[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {

    var x = this._employeeService.getEmployees();
    x.snapshotChanges().subscribe(item => {
     
      this.employeeList = [];

      
      item.forEach(element => {
        
        var y = element.payload.toJSON();
        console.log(y)
        this.employeeList.push(y as IEmployee);
      });
    });
  }
}
