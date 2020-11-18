import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit 
{
  product: Product;
  btnsav: string = "btn btn-primary";
  btndel: string = "btn btn-danger";
  saveMsg: string = "Save";

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private syssvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void 
  {
    this.syssvc.checkLogin();

    let id = this.route.snapshot.params.id;

    this.productsvc.get(id).subscribe(
      res => {
        console.debug("Product:", res);
        this.product = res;
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

  deleteProduct(): void
  {
    this.productsvc.delete(this.product).subscribe(
      res => {
        console.debug("Product deleted!");
        this.router.navigateByUrl("/products");
      },
      err => {
        console.error("Could not delete product: ", err);
      }
    );
  }

}
