import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-payfeesusingwallet',
  templateUrl: './payfeesusingwallet.component.html',
  styleUrls: ['./payfeesusingwallet.component.css']
})
export class PayfeesusingwalletComponent implements OnInit {
getFees="none";
getTpin="none";
amount!:number;
tpin!:any;
wallet!:any;
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.findBalanceAndFees()
  }
  findBalanceAndFees()
  {
      let mobile=localStorage.getItem("sessionMobile");
      let email=localStorage.getItem("sessionEmail");
      const url="http://localhost:9000/wallet/findFeesAndWalletBalnce?mobile="+mobile+"&email="+email;
      this.http.get(url).subscribe(res=>{
       this.wallet=res;
       this.getFees="block";
       this.getTpin="none";
       console.log(this.wallet);
      },err=>{
      this.toastr.error("no records found");
      });
  }
  terminate()
   {
     window.location.reload();
   }
   verifyAmount()
   {
     if(this.amount>0)
     {
        this.getFees="none";
       this.getTpin="block";
     }
     else
     {
      this.toastr.error("enter a valid amount");
     }
   }
   verifyTpin()
   {
      if(this.tpin>0)
      { 
        let mobile=localStorage.getItem("sessionMobile");
        let email=localStorage.getItem("sessionEmail");
        let walletCredentials={"mobile":mobile,"tpin":this.tpin};
        const url="http://localhost:9000/wallet/verification";
        this.http.post(url,walletCredentials).subscribe(res=>{
          const url1="http://localhost:9000/fees/pay/wallet/update?amount="+this.amount+"&mobile="+mobile+"&email="+email;
          this.http.get(url1).subscribe(res1=>{
            this.toastr.success("fees paid successfully"); 
          },err=>{
            this.toastr.error(err.error.message);
          })
        },err=>{
          this.toastr.error(err.error.message);
        });

      }
      else
      {
         this.toastr.error("enter a valid transaction pin");
      }
   }

}
