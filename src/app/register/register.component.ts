import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    
  name!:string;
  userName!:string;
  age!:number;
  userMobileNumber!:any;
  userEmail!:string;
  userPassword!:string;
  branch!:string;
  yearOfStudy!:number;
  hOrD!:string;
  needBus!:string;
  value!:any;
  userDetails!:any;
  walletDetails!:any;
  tpin!:any;
  verified="block";
  inserted="none";
  registered="none";
  loading1="none";
  loading2="none";
  loading3="none"

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  registerValidation()
  {   this.loading1="block";
       const url1="http://localhost:9000/register/verification?name="+this.name+"&userName="+this.userName+"&mobile="+this.userMobileNumber+"&age="+this.age+"&email="+this.userEmail+"&password="+this.userPassword;
       fetch(url1).then(res1=>res1.text()).then(res1=>{
        this.verified=res1;
        this.loading1="none";
        if(this.verified=="successfull")
        { 
          this.toastr.success(this.verified);
          this.verified="none";
          this.inserted="block";
        }
        else{
        this.toastr.error(this.verified);
        }
      });
  }
  hostelOrDayscholar()
  {
    this.loading2="block";
          if(this.hOrD=="H")
          {
            this.needBus="No";
          }
           this.userDetails={"name":this.name,"userName":this.userName,"age":this.age,"userEmail":this.userEmail,"userMobileNumber":this.userMobileNumber,"userPassword":this.userPassword,
          "branch":this.branch,"yearOfStudy":this.yearOfStudy,"hOrD":this.hOrD,"needBus":this.needBus};
          const url="http://localhost:9000/register/insertion";
          this.http.post(url,this.userDetails).subscribe(res=>{
            this.loading2="none";
          this.toastr.success("success");
          this.verified="none";
          this.inserted="none";
          this.registered="block";
        },err=>{
          this.loading2="none";
          this.toastr.error(err.error.message);
        });

  }
  setWallet(){
    this.loading3="block";
       this.walletDetails={"name":this.name,"mobile":this.userMobileNumber,"tpin":this.tpin}
       const url="http://localhost:9000/wallet/registration";
       this.http.post(url,this.walletDetails).subscribe(res=>{
        this.loading3="none";
         localStorage.setItem("sessionEmail",this.userEmail);
         localStorage.setItem("sessionMobile",this.userMobileNumber);
       this.toastr.success("success");
     },err=>{
       this.loading3="none";
       this.toastr.error(err.error.message);
     });
  }
    

}
