import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feestransactions',
  templateUrl: './feestransactions.component.html',
  styleUrls: ['./feestransactions.component.css']
})
export class FeestransactionsComponent implements OnInit {
transactions!:any;
transaction:any;
  constructor(private http:HttpClient,private toastr:ToastrService) { }
  
  ngOnInit(): void {
   this.findTransactionDetails()
  }
  findTransactionDetails()
  {
    let email=localStorage.getItem("sessionEmail");
    const url="http://localhost:9000/transaction/FeesTransactions?sessionEmail="+email;
    this.http.get(url).subscribe(res=>{
      this.transactions=res;
    },err=>{
      this.toastr.error(err.error.message);
    });

  }

}
