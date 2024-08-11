import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})
export class PathUrl { 
    url="http://localhost:3000/";
    getMenu =this.url+"menu/getmenu";
    updatedata=this.url+"menudetail/updatedata/";
    getMenuDetail=this.url+"menudetail/getmenudetail";
    getMenuDetailByMenuId =this.url+"menudetail/getmenudetailbymenuid/";
    addMenuData=this.url+"menudetail/adduser";
    deleteData=this.url+"menudetail/deletedata/";
    signIn=this.url+"auth/login";
 }