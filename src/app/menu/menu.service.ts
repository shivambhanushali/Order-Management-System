import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/service/http.service';
import { PathUrl } from '../../shared/constant/pathurl';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpService:HttpService,private pathUrl :PathUrl ) {}
getMenu() : any{
 this.httpService.getData(this.pathUrl.getMenu);
}
}
