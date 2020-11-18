import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit 
{
  request: Request = new Request();
  btnsav: string = "btn btn-primary";
  btndel: string = "btn btn-danger";
  saveMsg: string = "Save";

  constructor(
    private requestsvc: RequestService,
    private syssvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void 
  {
    this.syssvc.checkLogin();
    this.request.user = this.syssvc.user;
  }

  newChanges(): void
  {
    this.btnsav = "btn btn-primary";
    this.saveMsg = "Save";
  }

  saveChanges(): void
  {
    this.requestsvc.add(this.request).subscribe(
      res => {
        console.debug("Saved!");
        this.router.navigateByUrl("/requests");
        this.btnsav = "btn btn-success";
        this.saveMsg = "Saved!";
      },
      err => {
        this.btnsav = "btn btn-danger";
        this.saveMsg = "Failed!";
        console.error("Could not add Request: ", err);
      }
    );
  }
}
