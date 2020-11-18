import { Component, OnInit } from '@angular/core';
import { Request } from '../../request/request.class';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/request/request.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestLineCreateComponent implements OnInit 
{
  request: Request = new Request();
  requestline: RequestLine = new RequestLine();
  products: Product[] = [];
  btnsav: string = "btn btn-primary";
  btndel: string = "btn btn-danger";
  saveMsg: string = "Save";

  constructor(
    private requestsvc: RequestService,
    private requestlinesvc: RequestLineService,
    private productsvc: ProductService,
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
        this.requestline.request = this.request;
      },
      err => {
        console.error(err);
      }
    );
    this.productsvc.list().subscribe(
      res => 
      {
        console.log(res);
        this.products = res as Product[];
      },
      err =>
      {
        console.error(err);
      }
    )
  }

  newChanges(): void
  {
    this.btnsav = "btn btn-primary";
    this.saveMsg = "Save";
  }

  saveChanges(): void
  {
    console.log(this.requestline);
    this.requestlinesvc.add(this.requestline).subscribe(
      res => {
        console.debug("Saved!");
        this.router.navigateByUrl(`/requests/lines/${this.request.id}`);
        this.btnsav = "btn btn-success";
        this.saveMsg = "Saved!";
      },
      err => {
        this.btnsav = "btn btn-danger";
        this.saveMsg = "Failed!";
        console.error("Could not add RequestLine: ", err);
      }
    );
  }
}
