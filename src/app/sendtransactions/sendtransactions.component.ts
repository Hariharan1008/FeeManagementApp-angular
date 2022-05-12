import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sendtransactions',
  templateUrl: './sendtransactions.component.html',
  styleUrls: ['./sendtransactions.component.css']
})
export class SendtransactionsComponent implements OnInit {
 transactions!:any;
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllWalletTransactions()
  }
  getAllWalletTransactions()
  {
    let sessionMobile=localStorage.getItem("sessionMobile");
    const url="http://localhost:9000/transaction/fund/allTransactions?mobile="+sessionMobile;
    this.http.get(url).subscribe(res=>{
     this.transactions=res;
    },err=>{
      this.toastr.error(err.error.message);
    })
  }

}
