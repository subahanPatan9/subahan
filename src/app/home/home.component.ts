import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from '../services/employee-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private employeeDataService: EmployeeDataService,
              private route: ActivatedRoute,
              private router: Router
    ) { }

  empList: any[] = [];
  pageData: any;
  totalEmployees: number;

  items = [];
  pageOfItems: Array<any>;
  p: number = 1;
  
  ngOnInit(): void {
    // this.getempData();
    this.getEmployeList();
    // this.paginations;
    this.route.paramMap.subscribe(res=> {
      console.log(res);
    })
  }
  
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  showEmployeeDetails(id: number) {
    const employee = this.empList.find(item => item.id === id);
    this.router.navigateByUrl(`employeeDetails/${employee.id}`);
  }

  // getempData() {
  // this.employeeDataService.fetchDetails1(1).subscribe((res: any)=> {
  //   this.empList = res.data;
  //   this.totalEmployees = res.total;
  // })
  // }

  getEmployeList() {
    if (!this.employeeDataService.getEmployeeList()) {
      this.employeeDataService.getEmployeeDetails().subscribe((res: any) => {
        this.empList = res.employeeDetails;
        this.employeeDataService.setEmployeeList(this.empList);
      })
    } else {
      this.empList = this.employeeDataService.getEmployeeList();
    }
  }
  // paginations(page) {
  //   console.log(page);
  //   // this.employeeDataService.fetchDetails1(page).subscribe((res)=> {
  //   // this.empList = res['data'];
  //   // // this.pageData = res;
  //   // console.log('asdadas', this.empList)
  //   // })
  // }
}
