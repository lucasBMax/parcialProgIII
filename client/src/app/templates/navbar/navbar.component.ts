import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  flag: boolean = true;
  userLogged: boolean;
  userName: string = "";

  ngOnInit() {
   // this.showMenu();
  }
/* 
  showMenu(): void {
    let userInfo = JSON.parse(this.userService.getUserInformation());
    if(isNullOrUndefined(userInfo)){
      this.userLogged = false;
    } else{
      this.userLogged = true;
      this.userName = userInfo.username;
    }
  }

  refresh(){
    if (this.flag){
      window.location.reload();
      this.flag = false;
    }
  } */

}
