import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { Store } from '@ngxs/store';
import { Login } from './action-login/login.action';
import { AuthenticationService } from 'src/app/services/authenticationService/authentication.service';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  FormAuth!:FormGroup

  passwordVisible: boolean = false;

  constructor(private formBuilder:FormBuilder,
              private utilityService:UtilityService,
              private router:Router,
              private store:Store,
              private authenticationService:AuthenticationService
  ) { }

  ngOnInit(): void {
    this.setFormAuthentication()
  }

  setFormAuthentication():void{
    this.FormAuth = this.formBuilder.group({
      name:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  handleLogin(FormAuth:any):void{
    //  if(FormAuth.username && FormAuth.password == this.dataUserLogin.usename && this.dataUserLogin.password){
    //    this.utilityService.onShowCustomAlert('success','Berhasil','Berhasil Login').then(()=>{
    //     this.store.dispatch(new Login(this.username.value,this.password.value))
    //      this.router.navigateByUrl('Home')
    //    })
    //  }else{
    //    this.utilityService.onShowCustomAlert('error','Oops...','Username Password salah !!')
    //  }
    this.authenticationService.AuthenticateLogin(FormAuth).subscribe(result=>{
      if(result.responseResult){
        this.utilityService.onShowCustomAlert('success','Berhasil',result.message)
        .then(()=>{
          this.router.navigateByUrl('Home')
        })
      }else{
        this.utilityService.onShowCustomAlert('error','Oops...',result.message)
      }
    })
    
  }

  handleChangeShowPassword(args:HTMLInputElement):void{
    this.passwordVisible = !this.passwordVisible;
    args.type = this.passwordVisible ? 'text' : 'password';
  }

  get username():AbstractControl {return this.FormAuth.get('username') as AbstractControl}
  get password():AbstractControl { return this.FormAuth.get('password') as AbstractControl}

}
