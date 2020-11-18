import { Component, OnInit } from '@angular/core';
import { Request } from '../../request/request.class';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestLineEditComponent implements OnInit 
{
  requestline: RequestLine = new RequestLine();
  products: Product[] = [];
  btnsav: string = "btn btn-primary";
  btndel: string = "btn btn-danger";
  saveMsg: string = "Save";

  constructor(
    private requestlinesvc: RequestLineService,
    private productsvc: ProductService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void 
  {
    this.syssvc.checkLogin();

    let id = this.route.snapshot.params.id;

    this.requestlinesvc.get(id).subscribe(
      res => {
        console.debug("Line Item:", res);
        this.requestline = res;
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

  compareFn(a: Product, b: Product): boolean
  {
    return a.id === b.id;
  }

  saveChanges(): void
  {
    console.log(this.requestline);
    this.requestlinesvc.edit(this.requestline).subscribe(
      res => {
        console.debug("Saved!");
        this.router.navigateByUrl(`/requests/lines/${this.requestline.request.id}`);
        this.btnsav = "btn btn-success";
        this.saveMsg = "Saved!";
      },
      err => {
        this.btnsav = "btn btn-danger";
        this.saveMsg = "Failed!";
        console.error("Could not edit Line Item: ", err);
      }
    );
  }
}
