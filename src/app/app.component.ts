import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-project';
  constructor(private route: Router, private userServices: UserDataService) { 
    this.userServices.getdata().subscribe(
      data => {
        console.warn(data);
      }
    )
  }
  data: any;
  toService() {
    return this.data;
  }
  ngOnInit(): void { }

}
