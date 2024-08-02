import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuService } from './menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
    constructor(private menuService:MenuService){}
    ngOnInit(){
      this.menuService.getMenu().subscribe((res : any)=> {
        console.log(res)
      })
    }
}
