import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUser } from 'src/app/Models/LoginUser';
import { UserService } from 'src/app/Services/UserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginuser=new LoginUser('','');
  isLoginError : boolean =false;
  fieldTextType: boolean | undefined;
  repeatFieldTextType: boolean | undefined; 
  constructor(private route:ActivatedRoute,private router :Router,
    private UserService:UserService) { }
  ngOnInit() {
    this.reserform();
    
  }
  reserform(form? : NgForm){
    if(form !=null)
      form.reset();
    this.loginuser= {
      email:'',
      password : ''
    }
  }
  public emailConfirmed :boolean | undefined;
  public showSuccess: boolean | undefined;
  public showError: boolean | undefined;
  public errorMessage: string | undefined;
  OnSubmit(form : NgForm){
  this.UserService.loginUser(this.loginuser).subscribe((data:any)=>{
    if(data.Succeeded == true)
      this.reserform(form);
      this.UserService.getUserByEmail(this.loginuser.email).subscribe((user=>{
        this.router.navigate(['/profile'])
        window.scrollTo(0, 0); 
        localStorage.setItem('username',user.userName)
          localStorage.setItem('userId',user.id)
        }))    
  },error => {
    this.showError = true;
    this.errorMessage = error;
  })
}

toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}

toggleRepeatFieldTextType() {
  this.repeatFieldTextType = !this.repeatFieldTextType;
}
}