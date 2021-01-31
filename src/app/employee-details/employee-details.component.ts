import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeDataService } from '../services/employee-data.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeDataService: EmployeeDataService,
    private router: Router,
    private route: ActivatedRoute) { }

  showData: any;
  editData: any;
  employeeList = [];
  id: any;


  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      this.id = params.id;
      if (this.id) {
        this.getEmployeeById()
      }
      // console.log('params',this.showData);
      // this.editData = this.showData;
    })
  }

  getEmployeeById() {
    this.employeeList = this.employeeDataService.getEmployeeList();
    this.showData = this.employeeList.find(emp => emp.id == this.id);
    this.editData = this.showData;
  }
  onchangeUpdate() {
    console.log('asdasd', this.editData);
    let queryParams = {
      id: this.editData.id, 
      email: this.editData.email, 
      first_name: this.editData.first_name, 
      last_name: this.editData.last_name, 
      avatar: this.editData.avatar
    }
    this.router.navigate(['updateEmpDetails'], {queryParams});
  }

  onChangeRemove() {
    const index = this.employeeList.findIndex(emp => emp.id == this.id);
    this.employeeList.splice(index, 1);
    this.employeeDataService.setEmployeeList(this.employeeList);
    this.router.navigate(['home']);
  }

  

}
 