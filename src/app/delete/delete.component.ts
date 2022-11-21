import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route: Router, private userService: UsersService) { }

  ngOnInit(): void {
  }

  email: string = "";

  goToLog() {
    this.route.navigateByUrl('/login');
  }
  goToReg() {
    this.route.navigateByUrl('/register');
  }
  goToSer() {
    this.route.navigateByUrl('/service');
  }

  delete() {
    var userData =   this.email
    console.log(userData);
    this.userService.deleteUser(userData).subscribe((data) => {
      console.log(data);
    })
    window.alert("User Deleted");
  }

}
