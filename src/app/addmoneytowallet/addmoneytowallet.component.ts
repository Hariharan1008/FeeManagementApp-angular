import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addmoneytowallet',
  templateUrl: './addmoneytowallet.component.html',
  styleUrls: ['./addmoneytowallet.component.css']
})
export class AddmoneytowalletComponent implements OnInit {
validAmount="block";
validTpin="none";
amount!:any;
tpin!:any;

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  addMoney()
  {
     if(this.amount>0)
     {
       this.validAmount="none";
       this.validTpin="block";
     }
     else{
       this.toastr.error("invalid amount");
     }
  }
  updateWallet()
  {
    // if(this.tpin!="" && this.tpin.length<4 && this.tpin!=" ")
    // {
     let mobile=localStorage.getItem("sessionMobile");
     let walletCredentials={"mobile":mobile,"tpin":this.tpin};
     const url="http://localhost:9000/wallet/verification";
     this.http.post(url,walletCredentials).subscribe(res=>{
         const url1="http://localhost:9000/wallet/addMoney?amount="+this.amount+"&sessionMobile="+mobile;
         this.http.get(url1).subscribe(res1=>{
            this.toastr.success("successfully added");
          },err=>{
           this.toastr.error(err.error.message);
          });

     },err=>{
        this.toastr.error(err.error.message);
     });
    // }
    // else{
    //   this.toastr.error("enter a valid pin");
    // }
  }
  terminate()
   {
     window.location.reload();
   }

}
