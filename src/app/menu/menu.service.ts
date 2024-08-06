import { Injectable } from '@angular/core';
import { PathUrl } from '../../shared/constant/pathUrl';
import { HttpClient } from '@angular/common/http';
import { menuModel } from '../../shared/model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient, private pathUrl: PathUrl) { }
  getMenu(): any {
    // console.log(this.pathUrl.getMenu)
    var data= this.httpClient.get(this.pathUrl.getMenu);
    //  console.log(this.pathUrl)
    return data;
    // .subscribe((res: any) => {
    //  return res;
    // });
  }
}
