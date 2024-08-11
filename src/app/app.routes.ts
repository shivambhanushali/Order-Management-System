import { Routes , CanActivate } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MenudetailComponent } from './menudetail/menudetail.component';
import { AdminMenudetailComponent } from './admin/admin-menudetail/admin-menudetail.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { 
  AuthGuardService as AuthGuard} from './auth/auth-guard/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'menudetail',
    component: MenudetailComponent
  },
  {
    path: 'admin-menudetail',
    component: AdminMenudetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent
  },
  { path: '**', redirectTo: '' }
];
