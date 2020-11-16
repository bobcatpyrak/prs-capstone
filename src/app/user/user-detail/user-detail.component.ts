import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void 
  {
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

  saveChanges(): void
  {
    this.usersvc.edit(this.user).subscribe(
      res => {
        console.debug("Saved!");
        this.router.navigateByUrl("/users");
        this.btnsav = "btn btn-success";
        this.saveMsg = "Saved!";
      },
      err => {
        this.btnsav = "btn btn-danger";
        this.saveMsg = "Failed!";
        console.error("Could not save changes: ", err);
      }
    );
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
