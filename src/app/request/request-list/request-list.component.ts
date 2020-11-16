import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];
  sortCriteria: string = "id";
  ascSequence: boolean = true;

  constructor(
    private requestsvc: RequestService
  ) { }

  ngOnInit(): void 
  {
    this.requestsvc.list().subscribe(
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
