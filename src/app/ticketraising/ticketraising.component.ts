import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ticketraising',
  templateUrl: './ticketraising.component.html',
  styleUrls: ['./ticketraising.component.css']
})
export class TicketraisingComponent implements OnInit {
  query!:any;

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  insertTicket()
  {
    if(this.query!=null && this.query!="" && this.query!=" ")
    {
      let email=localStorage.getItem("sessionEmail");
      const url="http://localhost:9000/ticket/insert?query="+this.query+"&email="+email;
      this.http.get(url).subscribe(res=>{
        this.toastr.success("successfully sent");
        
      },err=>{
        this.toastr.error(err.error.message);
        
      });
    }    
    else
    {
       this.toastr.error("query cannot be empty");
    }
  }

}
