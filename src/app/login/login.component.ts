import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 email!:string;
 password!:string;
 loginCredentials!:any;
 sessionMobile!:any;
 loading="none";
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  validation()
  {
    if(this.email==null || this.email=="" || !this.email.includes("@") || !this.email.includes("."))
    {
       this.toastr.error("invalid email");
    }
    else if(this.password.length<8 || this.password==null || this.password=="" || this.password==" ")
    {
      this.toastr.error("invalid password");
    }
    else
    {
      this.loading="block";
        this.loginCredentials={"userEmail":this.email,"userPassword":this.password};
         const url="http://localhost:9000/user/login";
         this.http.post(url,this.loginCredentials).subscribe(res=>{
          localStorage.setItem("sessionEmail",this.email);
           const url1="http://localhost:9000/user/sessionMobile?email="+this.email;
           this.http.get(url1).subscribe(res1=>{
            this.loading="none";
           this.sessionMobile=res1;
           localStorage.setItem("sessionMobile",this.sessionMobile);
           });
          this.toastr.success("success");
       },err=>{
        this.loading="none";
         this.toastr.error(err.error.message);
       });
    }
  }
  verifyLogin()
  {
    
  }

}
