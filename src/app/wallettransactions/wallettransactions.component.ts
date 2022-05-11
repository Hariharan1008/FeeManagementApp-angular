import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-wallettransactions',
  templateUrl: './wallettransactions.component.html',
  styleUrls: ['./wallettransactions.component.css']
})
export class WallettransactionsComponent implements OnInit {
 transactions!:any;
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
   this.getAllWalletTransactions()
  }
  getAllWalletTransactions()
  {
       let mobile=localStorage.getItem("sessionMobile");
       const url="http://localhost:9000/transaction/wallet/allTransactions?mobile="+mobile;
       this.http.get(url).subscribe(res=>{
        this.transactions=res;
       },err=>{
         this.toastr.error(err.error.message);
       });
  }
}
