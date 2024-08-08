import { Component, Inject, inject } from '@angular/core';
import { menuDetailModel } from '../../../shared/model/menudetail.model';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AddMenudetailComponent } from '../add-menudetail/add-menudetail.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle, MatDialogModule
} from '@angular/material/dialog';
import { MenuService } from '../../menu/menu.service';
import { MenudetailService } from '../../menudetail/menudetail.service';
@Component({
  selector: 'app-admin-menudetail',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatDividerModule,
    MatIconModule, MatDialogTitle, MatDialogModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,MatIconModule],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  templateUrl: './admin-menudetail.component.html',
  styleUrl: './admin-menudetail.component.scss',
})
export class AdminMenudetailComponent {
  ngOnInit(){
    this.getMenudetail();
  }
  displayedColumns: string[] = ['title', 'price'];
  // dataSource = ELEMENT_DATA;/
  menuDetailList: menuDetailModel[] = [];
  readonly dialog = inject(MatDialog);
  constructor(
    private menuService: MenuService,private  menuDetailService: MenudetailService,
    public dialogRef: MatDialogRef<AddMenudetailComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {

    // this.menuDetailService.getMenuDetail().subscribe((res: any) => {
    //   this.menuDetailList = res
    //   console.log(this.menuDetailList)
    // });

  }
  // menuMenuIdByNest(menu:any)
  // }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddMenudetailComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        // this.animal.set(result);
      }
    });
  }
  getMenudetail() {
    this.menuService.getMenuDetail().subscribe((res: any) => {
      this.menuDetailList=res;
    // console.log(res)
    })
  }
  getMenuTitle(id : any){
    console.log(id)
    return "test"
  }
}

