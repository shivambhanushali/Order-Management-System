import { Injectable } from '@angular/core';
import { PathUrl } from '../../shared/constant/pathUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient, private pathUrl: PathUrl) { }
  ngOnInit() {
    this.getMenuDetail();
  }
  getMenu(): any {
    var data = this.httpClient.get(this.pathUrl.getMenu);
    return data;
  }
  getMenuDetail() {
    return this.httpClient.get(this.pathUrl.getMenuDetail)
  }
}
