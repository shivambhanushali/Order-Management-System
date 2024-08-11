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
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, FormBuilder } 
from '@angular/forms';
import { MenuService } from '../../menu/menu.service';
import { menuModel } from '../../../shared/model/menu.model';
import { MenudetailService } from '../../menudetail/menudetail.service';
import { menuDetailModel } from '../../../shared/model/menudetail.model';
import { AuthGuardService } from '../../auth/auth-guard/auth-guard.service';
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
  header : string="";
  constructor(private menuService: MenuService, private menuDetailService: MenudetailService,
 private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { element: menuDetailModel },
    private dialogRef: MatDialogRef<AddMenudetailComponent>) { }

  ngOnInit() {
    if(this.data.element === null){
     this.header ="Add"
    }else{
     this.header ="Update"
    }
    console.log(this.data.element)
    this.myForm = new FormGroup({
      id:new FormControl(this.data.element?.id),      
      price: new FormControl(this.data.element?.price),
      title: new FormControl(this.data.element?.title),
      menuId: new FormControl(this.data.element?.menuId),
      imageUrl: new FormControl(this.data.element?.imageUrl),
    });
    this.getMenu()
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  saveDetail() {
    if(this.data.element === null){
      this.menuDetailService.addMenuData(this.myForm.value).subscribe((res) => {
        console.log(res)
      })
    }else{
      this.menuDetailService.updateData(this.myForm.value,this.myForm.controls['id'].value).subscribe((res: any) => {
        console.log(res);
      })
    }
    // console.log(this.myForm.value);

  }
  getMenu() {
    this.menuService.getMenu().subscribe((res: any) => {
      this.menuDetail = res;
      this.getMenudetail();
    })
  }
  getMenudetail() {
    this.menuService.getMenuDetail().subscribe((res: any) => {
      this.menuDetailList = res;
      // console.log(res)
    })
  }
}
// this.form.controls['your form control name'].value
