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
  MatDialogTitle, MatDialogModule,
} from '@angular/material/dialog';
import { MenuService } from '../../menu/menu.service';
import { MenudetailService } from '../../menudetail/menudetail.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DeleteMenudetailComponent } from '../delete-menudetail/delete-menudetail.component';
@Component({
  selector: 'app-admin-menudetail',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatDividerModule,
    MatIconModule, MatDialogTitle, MatDialogModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose, MatIconModule, MatTooltipModule],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  templateUrl: './admin-menudetail.component.html',
  styleUrl: './admin-menudetail.component.scss',
})
export class AdminMenudetailComponent {
  ngOnInit() {
    this.getMenudetail();
  }
  displayedColumns: string[] = ['title', 'price', 'edit', 'delete'];
  // dataSource = ELEMENT_DATA;/
  menuDetailList: menuDetailModel[] = [];
  readonly dialog = inject(MatDialog);
  constructor(
    private menuService: MenuService, private menuDetailService: MenudetailService,
    public dialogRef: MatDialogRef<AddMenudetailComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any){}
  openDialog(element: any =null): void {
    // console.log(element)
    const dialogRef = this.dialog.open(AddMenudetailComponent, {
      data: { element },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getMenudetail();
    });
  }
  openDeleteDialog(element: any =null): void {
    // console.log(element)
    const dialogRef = this.dialog.open(DeleteMenudetailComponent, {
      data: { element },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getMenudetail();
    });
  }
  
  getMenudetail() {
    this.menuService.getMenuDetail().subscribe((res: any) => {
      this.menuDetailList = res;
      // console.log(res)
    })
  } 
  getMenuTitle(id: any) {
    console.log(id)
    return "test"
  }
}