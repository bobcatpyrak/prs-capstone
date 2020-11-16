import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit 
{
  product: Product = new Product();
  vendors: Vendor[] = [];
  btnsav: string = "btn btn-primary";
  btndel: string = "btn btn-danger";
  saveMsg: string = "Save";

  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit(): void 
  {
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
    )
  }

  newChanges(): void
  {
    this.btnsav = "btn btn-primary";
    this.saveMsg = "Save";
  }

  saveChanges(): void
  {
    this.productsvc.add(this.product).subscribe(
      res => {
        console.debug("Saved!");
        this.router.navigateByUrl("/products");
        this.btnsav = "btn btn-success";
        this.saveMsg = "Saved!";
      },
      err => {
        this.btnsav = "btn btn-danger";
        this.saveMsg = "Failed!";
        console.error("Could not add Product: ", err);
      }
    );
  }
}
