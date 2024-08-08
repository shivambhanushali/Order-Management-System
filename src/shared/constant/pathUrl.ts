import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})
export class PathUrl { 
    url="http://localhost:3000/";
    getMenu =this.url+"menu/getmenu";
    getMenuDetail=this.url+"menudetail/getmenudetail"
    getMenuDetailByMenuId =this.url+"menudetail/getmenudetailbymenuid/";
    addMenuData=this.url+"menudetail/adduser";
 }