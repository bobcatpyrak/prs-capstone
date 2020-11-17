import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit 
{
  btnlogin: string = "btn btn-primary";
  loginMsg: string = "Login";
  username: string = "";
  password: string = "";

  constructor(
    private usersvc: UserService,
    private syssvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void 
  {
  }
  
  login():void
  {
    this.usersvc.login(this.username, this.password).subscribe(
      res => 
      {
        this.syssvc.user = res;
        this.router.navigateByUrl("/home");
      },
      err =>
      {
        this.loginMsg = "Failed!"
        this.btnlogin = "btn btn-danger";
        console.error(err);
      }
    );
  }

  newChanges(): void
  {
    this.btnlogin = "btn btn-primary";
    this.loginMsg = "Login";
  }
}
