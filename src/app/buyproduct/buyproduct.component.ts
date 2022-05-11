import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent implements OnInit {
  product!:any;
  verifyTpin="none";
  tpin!:any;

  constructor(private http:HttpClient,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
   this.getProduct()
  }
  getProduct()
  {
    let productId=localStorage.getItem("productId");
    const url="http://localhost:9000/products/get/product?id="+productId;
    this.http.get(url).subscribe(res=>{
    this.product=res;
    },err=>{
      this.toastr.error(err.error.message);
    })
  }
  buyProduct(id:any)
  {
    this.verifyTpin="block";
  }
  completeProcess()
  {
     let pin=""+this.tpin;
     if(pin.length>3)
     {
      let productId=localStorage.getItem("productId");
      let mobile=localStorage.getItem("sessionMobile");
      let walletCredentials={"mobile":mobile,"tpin":this.tpin};
      const url="http://localhost:9000/wallet/verification";
      this.http.post(url,walletCredentials).subscribe(res=>{
        const url1="http://localhost:9000/products/transaction/update?productId="+productId+"&mobile="+mobile;
        this.http.get(url).subscribe(res=>{
         this.toastr.success("successfully purchased");
        },err=>{
          this.toastr.error(err.error.message);
        });
      
      },err=>{
        this.toastr.error(err.error.message);
      });
     }
     else
     {
       this.toastr.error("enter a valid pin");

     }
  }
  terminate()
  {
    window.location.reload();
  }

}
