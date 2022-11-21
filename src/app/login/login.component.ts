import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../_services/users.service';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UsersService) { }
  ngOnInit(): void { }

  public Email: string = "";
  public password: string = "";
  public isInValid: boolean = false;
  private userData: any;

  getPassword(email: string) {
    console.log(email);
  }
  loadUser() {
    const Data = "userMail = '" + this.Email + "'";
    this.userService.getAllUsersfromLocal(Data).subscribe((data) => {
      console.log(data[0]);
      this.userData = data[0];
      console.log(this.password);
    });
    this.home();
  }
  home() {
    if(this.password == this.userData.userPass) {
      this.router.navigateByUrl("/home");
    } else {
      this.isInValid = true;
    }
  }
  goToReg() {
    this.router.navigateByUrl("/register");
  }
  goToSer() {
    this.router.navigateByUrl("/service");
  }
  goToDel() {
    this.router.navigateByUrl("/delete");
  }

}
 