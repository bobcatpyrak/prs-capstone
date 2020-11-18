import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request/request.class';
import { RequestLine } from './requestline.class';
import { RequestLineService } from './requestline.service';

@Component({
  selector: 'app-requestline',
  templateUrl: './requestline.component.html',
  styleUrls: ['./requestline.component.css']
})
export class RequestLineComponent implements OnInit 
{
  request: Request;
  lines: RequestLine[];

  constructor(
    private requestsvc: RequestService,
    private linessvc: RequestLineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void 
  {
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

    this.linessvc.getLines(id).subscribe(
      res => {
        console.debug("Request Lines:", res);
        this.lines = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  refreshLines():void
  {
    let id = this.route.snapshot.params.id;

    this.linessvc.getLines(id).subscribe(
      res => {
        console.debug("Request Lines:", res);
        this.lines = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  refreshRequest():void
  {
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

  submit():void
  {
    this.request.reasonForRejection = "";
    this.requestsvc.review(this.request).subscribe(
      res =>{

        console.debug("Submitted for review");
        this.refreshRequest();
      },
      err => {
        console.error("Failed to submit for review", err);
      }
    )
  }

  deleteLine(line:RequestLine):void
  {
    this.linessvc.delete(line).subscribe(
      res => {
        console.debug("Line Item deleted!");
        this.refreshLines();
        this.refreshRequest();
      },
      err => {
        console.error("Could not delete line item: ", err);
      }
    );
  }
}
