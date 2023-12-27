import { Component } from '@angular/core';
import { Iproduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  id:any;
  product?:Iproduct;
  constructor(private dataService:DataService,private activatedRoute:ActivatedRoute){
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService.getProductById(this.id).subscribe((response:Iproduct)=>{
      this.product=response;
    })
  }
  addtocart(){
    alert("Added Successfully")
  }

}
