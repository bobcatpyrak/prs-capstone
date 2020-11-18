import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit 
{
  request: Request;
  btnsav: string = "btn btn-primary";
  btndel: string = "btn btn-danger";
  saveMsg: string = "Save";

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private syssvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void 
  {
    this.syssvc.checkLogin();

    let id = this.route.snapshot.params.id;

    this.requestsvc.get(id).subscribe(
      res => {
        console.debug("Request:", res);
        this.request = res;
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

  deleteRequest(): void
  {
    this.requestsvc.delete(this.request).subscribe(
      res => {
        console.debug("Request deleted!");
        this.router.navigateByUrl("/requests");
      },
      err => {
        console.error("Could not delete request: ", err);
      }
    );
  }

}
