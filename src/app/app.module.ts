import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../shared/service/http.service';
import { PathUrl } from '../shared/constant/pathurl';
import { MenuComponent } from './menu/menu.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../shared/loader/loader.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
@NgModule({
  declarations: [AppComponent,MenuComponent,LoaderComponent,FooterComponent, HeaderComponent,
    
  ],
  imports: [RouterModule,CommonModule,BrowserModule,FormsModule,HttpClientModule,RouterLink,RouterLinkActive],
  bootstrap:[AppComponent],
  // exports : [MenuComponent,AppComponent],
  providers:[HttpService,PathUrl]
})


  
export class AppModule {}
