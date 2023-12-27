import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categorybylist',
  templateUrl: './categorybylist.component.html',
  styleUrls: ['./categorybylist.component.css']
})
export class CategorybylistComponent {
  product? :Iproduct[];
  id:any;
  constructor(private dataservice : DataService,private activatedRouter:ActivatedRoute,private router :Router)
  {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.dataservice.getCategorybyId(this.id).subscribe((response :Iproduct[])=>{
      this.product=response
    })
  }
  onButtonClick(product: Iproduct) {
    this.router.navigate(['product-details',product.id])
    }

}
