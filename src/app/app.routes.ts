import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MenudetailComponent } from './menudetail/menudetail.component';
export const routes: Routes = [
{
  path:'',
  component:MenuComponent
},
{path:'menudetail',
  component:MenudetailComponent
}
];
