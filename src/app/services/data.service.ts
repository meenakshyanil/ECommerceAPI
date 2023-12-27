import { Injectable } from '@angular/core';
import{HttpClient}  from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICategory } from '../models/category.model';
import { Iproduct } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  private BASE_URL ='https://api.escuelajs.co/api/v1'
  private MY_API_URL = 'http://localhost:5219/api'

  //get all categories
  getCategories():Observable<ICategory[]>{
      return this.http.get<ICategory[]>(`http://localhost:5219/api/Category`)
  }
  //get all products
  getProducts():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(`${this.MY_API_URL}/Product`)
  }
  getProductById(id:number):Observable<Iproduct>{
    return this.http.get<Iproduct>(`${this.MY_API_URL}/Product/${id}`)
  }
  getCategorybyId(id:number):Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(`${this.MY_API_URL}/Product/category/${id}`)
  }

}
