import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feestransactionsusingid',
  templateUrl: './feestransactionsusingid.component.html',
  styleUrls: ['./feestransactionsusingid.component.css']
})
export class FeestransactionsusingidComponent implements OnInit {
transaction!:any;
transactionId:any;
loading="none";
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    
  }
  transactionDetailsUsingId()
  {
    if(this.transactionId>0)
    {
      this.loading="block";
     let email=localStorage.getItem("sessionEmail");
     const url="http://localhost:9000/transaction/feestransaction/id?transactionId="+this.transactionId+"&email="+email;
     this.http.get(url).subscribe(res=>{
      this.loading="none";
       this.transaction=res;
       console.log(res);
     },err=>
     {
      this.loading="none";
       this.toastr.error(err.error.message);
     })
    }
    else{
      this.toastr.error("please enter a valid transaction id");
    }
  }
}
