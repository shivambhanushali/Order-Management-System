import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from "../shared/loader/loader.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { SaladComponent } from "./salad/salad.component";
import { PizzaComponent } from "./pizza/pizza.component";
import { BurgerComponent } from "./burger/burger.component";
import { DessertComponent } from "./dessert/dessert.component";
import { DrinkComponent } from "./drink/drink.component";
import { PastaComponent } from "./pasta/pasta.component";
import { DetailComponent } from "./detail/detail.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Order Management System';
}
