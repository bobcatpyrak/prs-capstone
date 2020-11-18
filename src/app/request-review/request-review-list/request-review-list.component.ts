import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request/request.service';
import { Request } from 'src/app/request/request.class';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/user/user.class';
import { Router } from '@angular/router';


@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests: Request[] = [];
  user: User = new User();
  sortCriteria: string = "id";
  ascSequence: boolean = true;

  constructor(
    private requestsvc: RequestService,
    private syssvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void 
  {
    this.syssvc.checkLogin();
    if(!this.syssvc.isReviewer)
      this.router.navigateByUrl("/home");

    this.user = this.syssvc.user;
    console.log(this.syssvc.user);
    console.log(this.user);

    this.requestsvc.requests(this.user.id).subscribe(
      res => 
      {
        console.log(res);
        this.requests = res as Request[];
        for(let r of this.requests)
        {
          r.username = r.user.username;
        }
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
