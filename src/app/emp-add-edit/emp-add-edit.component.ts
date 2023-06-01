import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {
  empForm:FormGroup;


  startDate = new Date(1990, 0, 1);

  education:string[]=[
    'Metric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ];
  experience:number[]=[
    0,1,2,3,4,5,6,7,8,9
  ]

  constructor(private _fb:FormBuilder,private _empService:EmployeeService, private _dialogRef:MatDialogRef<EmpAddEditComponent>,@Inject(MAT_DIALOG_DATA) public data:any){
    this.empForm= this._fb.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      companyName:'',
      experience:'',
      package:'',
      


    })
  }
  ngOnInit(): void {
   this.empForm.patchValue(this.data);
  }
  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data){
        this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next:(val:any)=>{
            alert('Employee details  updated');
            this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.log(err);
            
          }
         })
      }
      else{

     
     this._empService.addEmployee(this.empForm.value).subscribe({
      next:(val:any)=>{
        alert('Employee added successfully');
        this._dialogRef.close(true);
      },
      error:(err:any)=>{
        console.log(err);
        
      }
     }) }
       
    }
  }

}
