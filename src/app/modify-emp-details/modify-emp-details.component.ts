import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from '../services/employee-data.service';

@Component({
  selector: 'app-modify-emp-details',
  templateUrl: './modify-emp-details.component.html',
  styleUrls: ['./modify-emp-details.component.css']
})
export class ModifyEmpDetailsComponent implements OnInit {

  constructor(private employeeDataService: EmployeeDataService,
              private router: Router,
              private route: ActivatedRoute) { }

  editData: any;
  changeData:any;
  employeeList = [];
  firstName: string;
  lastName: string;
  email: string;
  avatar: any;


  ngOnInit(): void {
    this.route.queryParams.subscribe(params=> {
      console.log('params',params);
      this.editData = params;
      this.firstName = this.editData.first_name;
      this.lastName = this.editData.last_name;
      this.email = this.editData.email;
      this.avatar = this.editData.avatar;
    })
    this.employeeList = this.employeeDataService.getEmployeeList();
  }

  // getEmpData: any =[];

  updateEmpData(event) {
    console.log(this.firstName);
    let emplyee = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email, 
      avatar: this.editData.avatar,
      id: +this.editData.id
    }
    if (this.editData.id) {
    const index = this.employeeList.findIndex(emp => emp.id == this.editData.id)
    this.employeeList.splice(index, 1, emplyee);
    } else {
      emplyee = {
        ...emplyee,
        id: this.employeeList.length + 1
      }
      this.employeeList.push(emplyee);
    }
    this.employeeDataService.setEmployeeList(this.employeeList);
    this.router.navigate(['home']);
    
    

    // this.changeData.setValue({
    //   firstName: this.editData.first_name,
    //   lastName: this.editData.last_name,
    //   email: this.editData.email, 
    //   avatar: this.editData.avatar
    // })

  }

  getBackHome(){
    this.router.navigate(['home']);
  }
}

// export class addEmpData {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: any;
//   exampleFormControlFile1: any;
// }
