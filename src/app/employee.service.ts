import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class EmployeeService {

  employeeList: AngularFireList<any>;



  constructor(private http: HttpClient,private firebase :AngularFireDatabase ) { }

  getEmployees(){
   
    this.employeeList = this.firebase.list('employees');
   
    return this.employeeList;
   

  }

}
