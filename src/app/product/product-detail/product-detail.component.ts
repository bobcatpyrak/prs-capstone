import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void 
  {
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

  saveChanges(): void
  {
    this.productsvc.edit(this.product).subscribe(
      res => {
        console.debug("Saved!");
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