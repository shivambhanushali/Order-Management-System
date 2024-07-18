import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SaladComponent } from './salad/salad.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BurgerComponent } from './burger/burger.component';
import { PastaComponent } from './pasta/pasta.component';
import { DessertComponent } from './dessert/dessert.component';

export const routes: Routes = [
   {
    path:'add-menu',
    component:MenuComponent
   },
   {
      path:'add-salad',
      component:SaladComponent
   },
   {
      path:'add-pasta',
      component:PastaComponent
   },
   {
      path:'add-dessert',
      component:DessertComponent
   },
   {
      path:'add-burger',
      component:BurgerComponent
   },
   {
      path:'add-pizza',
      component:PizzaComponent
   },
];
