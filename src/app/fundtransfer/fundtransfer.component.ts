import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent implements OnInit {
   getUser="block";
  verifyUser="none";
  getAmount="none";
  getTpin="none";
  mobile!:number;
   amount!:number;
   tpin!:number;
   userName!:any;
   name!:any;
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  
  findUser()
  {
    let mobileNumber= ""+this.mobile;
    if(mobileNumber.length==10)
    {
        const url="http://localhost:9000/fundTransfer/findUser?receiverMobile="+this.mobile;
        this.http.get(url).subscribe(res=>{
        this.userName=res;
        this.name=this.userName.message;
        this.getUser="none";
        this.verifyUser="block";
        // this.getAmount="none";
        // this.getTpin="none";
         },err=>{
        this.toastr.error(err.error.message);
        })
    }
    else{
      this.toastr.error("invalid mobile number");
    }
    
    
  }
 
  verifyAmount()
  {
     if(this.amount>0)
     {
      this.getUser="none";
      this.verifyUser="none";
      this.getAmount="none";
      this.getTpin="block";
     }
     else
     {
       this.toastr.error("invalid amount");
     }
  }
  verifyTpin()
  {
       let pin=""+this.tpin;
      if(pin.length>3)
      {
        let mobile=localStorage.getItem("sessionMobile");
        let walletCredentials={"mobile":mobile,"tpin":this.tpin};
        const url="http://localhost:9000/wallet/verification";
        this.http.post(url,walletCredentials).subscribe(res=>{
           this.verifyAndProcess();
        },err=>{
          this.toastr.error(err.error.message);
        });
      }
      else{
        this.toastr.error("please enter a valid pin");
      }
  }
  terminate()
  {
    window.location.reload();
  }
  proceed()
  {
    this.getUser="none";
    this.verifyUser="none";
    this.getAmount="block";
    // this.getTpin="none";

  }
  verifyAndProcess()
  {
       let senderMobile=localStorage.getItem("sessionMobile");
       let receiverMobile=this.mobile;
       const url="http://localhost:9000/fundTransfer/updateAllTransactions?receiverMobile="+receiverMobile+"&senderMobile="+senderMobile+"&amount="+this.amount;
       this.http.get(url).subscribe(res=>{
        this.toastr.success("successfully transfered");
       },err=>{
        this.toastr.error(err.error.message);
       });
  }

}
