import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { CreattaskComponent } from './creattask/creattask.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({


  
  declarations: [
    AppComponent,
    LoginComponent,
    TasklistComponent,
    CreattaskComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatSlideToggleModule, 
    RouterModule, ReactiveFormsModule, MatFormFieldModule,FormsModule,ReactiveFormsModule,
    MatButtonModule,RouterModule,MatTableModule,
    HttpClientModule
    ,MatSidenavModule,MatSortModule, MatPaginatorModule,
    MatToolbarModule,MatIconModule,MatInputModule,BrowserAnimationsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
