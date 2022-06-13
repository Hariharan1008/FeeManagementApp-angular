import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feestructure',
  templateUrl: './feestructure.component.html',
  styleUrls: ['./feestructure.component.css']
})
export class FeestructureComponent implements OnInit {
 
year!:any;
branch!:any;
fee!:any;
loading="none";

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  findFeesStructure()
  {
    this.loading="block";
    const url="http://localhost:9000/fees/feesStructure?year="+this.year+"&branch="+this.branch;
    this.http.get(url).subscribe(res=>{
      this.loading="none";
      this.fee=res;
    },err=>{
      this.toastr.error(err.error.message);
      this.loading="none";
    })

  }
   terminate()
   {
     window.location.reload();
   }
}
