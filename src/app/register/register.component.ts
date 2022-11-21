import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private userService:UsersService) { }

  public firstname: string = "";
  public lastname: string = "";
  public password: string = "";
  public cpassword: string = "";
  public email: string = "";
  public phoneNumber: string = "";

  ngOnInit(): void {
  }

  goToLog() {
    this.router.navigateByUrl("/login");
  }
  goToSer() {
    this.router.navigateByUrl("/service")
  }
  goToDel() {
    this.router.navigateByUrl("/delete")
  }

  reset() {
    this.lastname = this.firstname = this.password = this.cpassword = this.email = this.phoneNumber = "";
  }

  insertInDatabase() {
    return {
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "userPass" : this.password,
      "userMail" : this.email,
      "userPhNo" : this.phoneNumber
    }
  }

  urData: any;

  submit(): boolean {
    if(!this.firstname) {
      window.alert('invalid firstname');
      return false;
    }
    if(!this.lastname) {
      window.alert('invalid lastname');
      return false;
    }
    if(this.password.length < 8) {
      window.alert('password is weak');
      return false;
    }
    if(this.password != this.cpassword) {
      window.alert("Password don't match");
      return false;
    }
    if(this.phoneNumber.toString().length != 10) {
      alert("invalid phone number");
      return false;
    }
    this.urData = this.insertInDatabase();
    this.createUser();
    return true;
  }

  createUser() {
    var userData = this.urData; 
    console.log(userData);
    this.userService.createUser(userData).subscribe((data) => {
      console.log(data);
    })
    window.alert("User registered");
  }

}
 