import { Component, Inject, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MenuService } from '../../menu/menu.service';
import { menuModel } from '../../../shared/model/menu.model';
import { MenudetailService } from '../../menudetail/menudetail.service';
import { menuDetailModel } from '../../../shared/model/menudetail.model';
@Component({
  selector: 'app-add-menudetail',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSelectModule,
    ReactiveFormsModule],
  providers: [FormBuilder],
  templateUrl: './add-menudetail.component.html',
  styleUrl: './add-menudetail.component.scss'
})
export class AddMenudetailComponent {
  myForm: FormGroup = this.formBuilder.group({});
  menuDetail: menuModel[] = [];
  menuDetailList: menuDetailModel[] = [];
  constructor(private menuService: MenuService, private menuDetailService:MenudetailService, private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {},
    private dialogRef: MatDialogRef<AddMenudetailComponent>) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      price: new FormControl(''),
      title: new FormControl(''),
      menuId: new FormControl(''),
      imageUrl : new FormControl(''),
    });
    this.getMenu()
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public saveDetail() {
    console.log(this.myForm.value);
    this.menuDetailService.addMenuData(this.myForm.value).subscribe((res)=>{
      console.log(res)
    })
  }
  getMenu() {
    this.menuService.getMenu().subscribe((res: any) => {
      this.menuDetail = res;
      this.getMenudetail();
    })
  }
  getMenudetail() {
    this.menuService.getMenuDetail().subscribe((res: any) => {
      this.menuDetailList=res;
    // console.log(res)
    })
  }
}
