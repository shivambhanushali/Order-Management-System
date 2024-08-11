import { Injectable } from '@angular/core';
import { PathUrl } from '../../../shared/constant/pathUrl';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
  export class AdminLoginService {
  constructor(private httpClient: HttpClient, private pathUrl: PathUrl){}
  signIn(body:any){
    return this.httpClient.post(this.pathUrl.signIn,body);
  }
  }
