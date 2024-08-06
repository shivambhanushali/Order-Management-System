import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenudetailService } from './menudetail.service';
import { menuDetailModel } from '../../shared/model/menudetail.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menudetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menudetail.component.html',
  styleUrl: './menudetail.component.scss'
})
export class MenudetailComponent {
  menuDetailList: menuDetailModel[] = [];
  header : string ="";
  constructor(private route: ActivatedRoute, private router: Router, private menuDetailService: MenudetailService) {
    var param = this.router.getCurrentNavigation()?.extras.state?.["menu"];
    console.log(param)
    if(param === undefined){
      param.id = 1;
      console.log(param)
    }else{
      this.header=param.title;
    }
    console.log(this.header)
    this.menuDetailService.getId(param.id).subscribe((res: any) => {
      this.menuDetailList = res
      console.log(this.menuDetailList)
    });
  }
}

