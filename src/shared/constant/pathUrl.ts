import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})
export class PathUrl { 
    url="http://localhost:3000/";
    getMenu =this.url+"menu/getmenu";
    
    getMenuDetailByMenuId =this.url+"menudetail/getmenudetailbymenuid/";
 }