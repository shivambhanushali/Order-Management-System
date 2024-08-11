import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MenudetailComponent } from './menudetail/menudetail.component';
import { FormControl } from '@angular/forms';
import { AuthGuardService } from './auth/auth-guard/auth-guard.service';

export class MyComponent {
  
}
@Component({
  selector: 'app-root',
   standalone : true,
  
  imports : [RouterModule,HttpClientModule,RouterLink,RouterLinkActive],
   providers : [AuthGuardService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Order Management System';
}
