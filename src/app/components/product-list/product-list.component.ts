import { Component } from '@angular/core';
import { Iproduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products?:Iproduct[];
  constructor(private dataService:DataService,private router:Router){
    this.dataService.getProducts().subscribe((response:Iproduct[])=>{
      this.products=response;
    })
  }
  onButtonClicked(product:Iproduct){
    this.router.navigate(['product-details',product.id])
  }

}
