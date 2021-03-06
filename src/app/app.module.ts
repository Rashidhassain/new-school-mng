import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/';
import {MatGridListModule} from '@angular/material/grid-list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ContactComponent } from './contact/contact.component';
import { MatButtonModule } from '@angular/material/button';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Demo2Component } from './demo2/demo2.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './footer/footer.component';
import { TeacherhomeComponent } from './teacherhome/teacherhome.component';
import { TeacherregComponent } from './teacherreg/teacherreg.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ParenthomeComponent } from './parenthome/parenthome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { HandledComponent } from './handled/handled.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { AddmarksComponent } from './addmarks/addmarks.component';
import { AdminclassComponent } from './adminclass/adminclass.component';
import { AdminsubjectComponent } from './adminsubject/adminsubject.component';
import { AdminstaffComponent } from './adminstaff/adminstaff.component';
import { AdminsetexmComponent } from './adminsetexm/adminsetexm.component';
import { AdminfeestrucComponent } from './adminfeestruc/adminfeestruc.component';
import { AdmineventComponent } from './adminevent/adminevent.component';
import { AdminnoticeComponent } from './adminnotice/adminnotice.component';
import { TeacherattendComponent } from './teacherattend/teacherattend.component';
import { AdminnonstaffComponent } from './adminnonstaff/adminnonstaff.component';
import { AdminadmissComponent } from './adminadmiss/adminadmiss.component';
import { AdminnComponent } from './adminn/adminn.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    TeacherComponent,
    ContactComponent,
    AdminhomeComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    ParentComponent,
    HomeComponent,
    FooterComponent,
    TeacherhomeComponent,
    TeacherregComponent,
    ParenthomeComponent,
    HandledComponent,
    ViewstudentComponent,
    AddmarksComponent,
    AdminclassComponent,
    AdminsubjectComponent,
    AdminstaffComponent,
    AdminsetexmComponent,
    AdminfeestrucComponent,
    AdmineventComponent,
    AdminnoticeComponent,
    TeacherattendComponent,
    AdminnonstaffComponent,
    AdminadmissComponent,
    AdminnComponent,

  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    AppRoutingModule, HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    MatDialogModule,
    FormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatGridListModule,
    ReactiveFormsModule
  ],
  providers: [
    MatDatepickerModule


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
