import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-mytickets',
  templateUrl: './mytickets.component.html',
  styleUrls: ['./mytickets.component.css']
})
export class MyticketsComponent implements OnInit {
tickets!:any;
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.findAllTickets()
  }
  findAllTickets()
  {
    let email=localStorage.getItem("sessionEmail");
    const url="http://localhost:9000/transaction/allTickets?email="+email;
    this.http.get(url).subscribe(res=>{
      this.tickets=res;
    },err=>{
      this.toastr.error(err.error.message);
    })
  }

}
