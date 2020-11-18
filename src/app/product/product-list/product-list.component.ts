import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  sortCriteria: string = "vendorName";
  ascSequence: boolean = true;

  constructor(
    private productsvc: ProductService
  ) { }

  ngOnInit(): void 
  {
    this.productsvc.list().subscribe(
      res => 
      {
        console.log(res);
        this.products = res as Product[];
        for(let p of this.products)
        {
          p.vendorName = p.vendor.name;
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
