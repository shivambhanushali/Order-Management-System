import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})
export class PathUrl { 
    url="http://localhost:3000/";
    getMenu =this.url+"user/getmenu";
    
    getMenuDetailByMenuId =this.url+"user/getmenudetailbymenuid";
 }