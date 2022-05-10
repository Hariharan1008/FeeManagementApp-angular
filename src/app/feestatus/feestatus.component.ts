import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feestatus',
  templateUrl: './feestatus.component.html',
  styleUrls: ['./feestatus.component.css']
})
export class FeestatusComponent implements OnInit {
totalFees!:any;
feesPaid!:any;
pendingFee!:any;
fee!:any;

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.feesStatus();
  }
  feesStatus()
  {
     let email=localStorage.getItem("sessionEmail");
     console.log(email);
    const url="http://localhost:9000/fees/feesStatus?email="+email;
    this.http.get(url).subscribe(res=>{
      this.fee=res;
      console.log(this.fee);
    })
  }
  terminate()
   {
     window.location.reload();
   }

}