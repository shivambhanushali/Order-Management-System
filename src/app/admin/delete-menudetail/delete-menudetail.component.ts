import { menuDetailModel } from '../../../shared/model/menudetail.model';
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
import { MenudetailService } from '../../menudetail/menudetail.service';
@Component({
  selector: 'app-delete-menudetail',
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
  templateUrl: './delete-menudetail.component.html',
  styleUrl: './delete-menudetail.component.scss'
})
export class DeleteMenudetailComponent {
 constructor(private menuDetailService: MenudetailService,private dialogRef: MatDialogRef<DeleteMenudetailComponent>,
  @Inject(MAT_DIALOG_DATA) public data: { element: menuDetailModel }
 ){
 }
  deleteData()
  {
    this.menuDetailService.deleteData(this.data.element.id).subscribe((res: any) => {
      // console.log(res)
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
