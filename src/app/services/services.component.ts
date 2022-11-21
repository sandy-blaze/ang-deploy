import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from "../_services/users.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  allUsers:any;
  allUsersLocal:any;
  constructor(private userService:UsersService, private route: Router) { }

  ngOnInit(): void {
    /*this.userService.getAllUsers().subscribe((data)=>{
      console.log(data);
      this.allUsers = data;
    })*/
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsersfromLocal("true").subscribe((data) => {
      this.allUsersLocal = data;
    });
  }

  goToReg() {
    this.route.navigateByUrl("/register");
  }
  goToLog() {
    this.route.navigateByUrl("/login");
  }
  goToDel() {
    this.route.navigateByUrl("/delete");
  }

}
