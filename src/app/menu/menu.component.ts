import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuService } from './menu.service';
import { PathUrl } from '../../shared/constant/pathUrl';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { menuModel } from '../../shared/model/menu.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, HttpClientModule, CommonModule],
  providers: [PathUrl],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuList: menuModel[] = []
  constructor(private menuService: MenuService, private router: Router) { }
  ngOnInit() {
    this.menuService.getMenu().subscribe((res: any) => {
      this.menuList = res;
      // console.log(this.menuList)
    });
  }
  getMenuDetail(menu: any) {
    this.router.navigate(['menudetail'], { state: { menu: menu } });
  }

}
