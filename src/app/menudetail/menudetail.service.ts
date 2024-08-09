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
    return this.httpClient.get(this.pathUrl.getMenuDetailByMenuId+id);
    console.log(this.pathUrl)
  }
  addMenuData(body:any ){
    return this.httpClient.post(this.pathUrl.addMenuData,body);
  }
  updateData(body:any,id:any){
    return this.httpClient.put(this.pathUrl.updatedata+id,body);
  }
  deleteData(id:any){
    console.log(this.pathUrl.deleteData+id)
    return this.httpClient.delete(this.pathUrl.deleteData+id);
  }
}
