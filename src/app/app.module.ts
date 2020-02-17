import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ContactComponent } from './contact/contact.component';
import {MatButtonModule} from '@angular/material/button';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Demo2Component } from './demo2/demo2.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';

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
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
