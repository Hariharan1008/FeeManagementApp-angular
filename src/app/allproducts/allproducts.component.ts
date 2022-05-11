import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  products!:any;

  constructor(private http:HttpClient,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
   this.getAllProducts();
  }
  getAllProducts()
  {
    const url="http://localhost:9000/products/allProducts";
    this.http.get(url).subscribe(res=>{
     this.products=res;
    },err=>{
     this.toastr.error(err.erroe.message);
    })
  }
  buyProduct(id:any)
  {
     let mobile=localStorage.getItem("sessionMobile");
     const url="http://localhost:9000/products/verifyPoints?productId="+id+"&mobile="+mobile;
     this.http.get(url).subscribe(res=>{
      this.toastr.success("success");
      localStorage.setItem("productId",id);
      this.router.navigate(["buyproduct"]);
     },err=>{
       this.toastr.error(err.error.message);
     })
  }

}
