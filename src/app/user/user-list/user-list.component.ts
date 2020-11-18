import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  sortCriteria: string = "id";
  searchCriteria: string = "";
  ascSequence: boolean = true;

  constructor(
    private usersvc: UserService,
    private syssvc: SystemService
  ) { }

  ngOnInit(): void 
  {
    this.syssvc.checkLogin();
    this.usersvc.list().subscribe(
      res => 
      {
        console.log(res);
        this.users = res as User[];
      },
      err =>
      {
        console.error(err);
      }
    )
  }

  sortColumn(column: string): void
  {
    if(column == this.sortCriteria)
    {
      this.ascSequence = !this.ascSequence;
      return;
    }
    this.sortCriteria = column;
    this.ascSequence = true;
  }

}
