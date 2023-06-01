import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CrudComponent } from './crud/crud.component';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { HttpClientModule } from '@angular/common/http';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    EmpAddEditComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatToolbarModule,MatIconModule,MatButtonModule,MatDialogModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatRadioModule,MatSelectModule,ReactiveFormsModule,MatTableModule,MatSortModule,MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
