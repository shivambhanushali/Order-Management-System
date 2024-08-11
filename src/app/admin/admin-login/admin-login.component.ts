import { Component } from '@angular/core';
import { AdminLoginService } from './admin-login.service';
import {
   FormBuilder, FormControl, FormGroup, 
   FormsModule, ReactiveFormsModule }
 from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  providers:[],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  logInForm: FormGroup = this.formBuilder.group({});
  signtoken: string = "";
  constructor(private router: Router,private adminloginservice: AdminLoginService,
     private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.logInForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  signIn() {
    this.adminloginservice.signIn(this.logInForm.value).subscribe((res: any) => {
      localStorage.setItem('token', res.access_token);
      this.signtoken = res.access_token;
      console.log(res.access_token);
      this.router.navigate(['/admin-menudetail']);
    });
  }
}