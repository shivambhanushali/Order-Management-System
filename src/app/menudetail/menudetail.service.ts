import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PathUrl } from '../../shared/constant/pathUrl';
@Injectable({
  providedIn: 'root'
})
export class MenudetailService {
    constructor(private httpClient: HttpClient,private pathUrl:PathUrl){}

  getId(id:any):any
  {
    var data= this.httpClient.get(this.pathUrl.getMenuDetailByMenuId+id);
    console.log(this.pathUrl)
    return data;
  
  }
}
