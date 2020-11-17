import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit 
{
  product: Product = new Product();
  vendors: Vendor[] = [];
  btnsav: string = "btn btn-primary";
  btndel: string = "btn btn-danger";
  saveMsg: string = "Save";

  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
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
    this.vendorsvc.list().subscribe(
      res => 
      {
        console.log(res);
        this.vendors = res as Vendor[];
      },
      err =>
      {
        console.error(err);
      }
    );
  }

  compareFn(a: Vendor, b: Vendor): boolean
  {
    return a.id === b.id;
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
        this.router.navigateByUrl("/products");
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
