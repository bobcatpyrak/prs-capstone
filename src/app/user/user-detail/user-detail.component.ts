import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit 
{
  user: User;
  btnsav: string = "btn btn-primary";
  btndel: string = "btn btn-danger";
  saveMsg: string = "Save";

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
  ) { }

  ngOnInit(): void 
  {
    this.syssvc.checkLogin();

    let id = this.route.snapshot.params.id;

    this.usersvc.get(id).subscribe(
      res => {
        console.debug("User:", res);
        this.user = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  newChanges(): void
  {
    this.btnsav = "btn btn-primary";
    this.saveMsg = "Save";
  }

  deleteUser(): void
  {
    this.usersvc.delete(this.user).subscribe(
      res => {
        console.debug("User deleted!");
        this.router.navigateByUrl("/users");
      },
      err => {
        console.error("Could not delete user: ", err);
      }
    );
  }

}
