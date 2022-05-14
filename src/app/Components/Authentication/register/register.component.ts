import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUser } from 'src/app/Models/LoginUser';
import { UserService } from 'src/app/Services/UserService';
import { User } from 'src/app/Models/User';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userModel=new User('','','');
  constructor(private userservice:UserService,private router: Router) { }
  fieldTextType: boolean | undefined;
  repeatFieldTextType: boolean | undefined;
  
  ngOnInit(): void {
    this.reserform();
  }
  reserform(form? : NgForm){
    if(form !=null)
      form.reset();
    this.userModel= {
      userName:'',
      email:'',
      password : '',
    }
  }
  public showError: boolean | undefined;
  public errorMessage: string | undefined;
  OnSubmit(form : NgForm){
    this.userservice.registerUser(this.userModel).subscribe((data:any)=>{
      if(data.Succeeded == true)
      this.reserform(form);
      window.scrollTo(0, 0); 
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