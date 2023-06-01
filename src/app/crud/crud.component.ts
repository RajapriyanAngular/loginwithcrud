import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { EmployeeService } from '../service/employee.service';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  displayedColumns: string[] = ['id','firstName', 'lastName', 'email', 'dob','gender','education','companyName','experience','package','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _dialog:MatDialog,private _empService:EmployeeService){


  }
  ngOnInit(): void {
    this.getEmployerList();
  }
  openaeForm(){
    const dialogRef= this._dialog.open(EmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getEmployerList()
        }
      },
    });
  }
  getEmployerList(){
    this._empService.getEmployerList().subscribe({
      next:(res:any)=>{
        this.dataSource =new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
        this
        
      },
      error:console.log,
      
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteEmployee(id:number){
    this._empService.deleteEmployee(id).subscribe({
      next:(res)=>{
        alert('Employee deleted successfully');
        this.getEmployerList() 
      },
      error:console.log
    })
  }
  editaeForm(data:any){
   const dialogRef = this._dialog.open(EmpAddEditComponent,{
    data,
   });

   dialogRef.afterClosed().subscribe({
    next:(val)=>{
      if(val){
        this.getEmployerList()
      }
    },
  });
   
}
logout(){
  alert('Logout Successful')
}

}
