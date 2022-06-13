import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticketdetailsusingid',
  templateUrl: './ticketdetailsusingid.component.html',
  styleUrls: ['./ticketdetailsusingid.component.css']
})
export class TicketdetailsusingidComponent implements OnInit {
 ticket!:any;
 ticketId!:any;
 loading="none";
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  ticketDetailsUsingId()
  {
    if(this.ticketId>0)
    {
      this.loading="block";
     let email=localStorage.getItem("sessionEmail");
     const url="http://localhost:9000/transaction/ticket/usingid?ticketId="+this.ticketId+"&email="+email;
     this.http.get(url).subscribe(res=>{
      this.loading="none";
       this.ticket=res;
     },err=>{
      this.loading="none";
       this.toastr.error(err.error.message);
     });
    }
    else
    {
      this.toastr.error("please enter valid ticket id");
    }
  }

}
