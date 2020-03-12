import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherhomeComponent } from './teacherhome/teacherhome.component';
import { TeacherregComponent } from './teacherreg/teacherreg.component';
import { ParenthomeComponent } from './parenthome/parenthome.component';
import { HandledComponent } from './handled/handled.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { AddmarksComponent } from './addmarks/addmarks.component';
import { AdminclassComponent } from './adminclass/adminclass.component';
import { AdmineventComponent } from './adminevent/adminevent.component';
import { AdminsetexmComponent } from './adminsetexm/adminsetexm.component';
import { AdminstaffComponent } from './adminstaff/adminstaff.component';
import { AdminsubjectComponent } from './adminsubject/adminsubject.component';
import { AdminfeestrucComponent } from './adminfeestruc/adminfeestruc.component';
import { AdminnoticeComponent } from './adminnotice/adminnotice.component';
import { TeacherattendComponent } from './teacherattend/teacherattend.component';
import { AdminnonstaffComponent } from './adminnonstaff/adminnonstaff.component';
import { AdminadmissComponent } from './adminadmiss/adminadmiss.component';
import { AdminnComponent } from './adminn/adminn.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'demo1', component: Demo1Component },
  { path: 'demo2', component: Demo2Component },
  { path: 'parent', component: ParentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'teacherhome', component: TeacherhomeComponent },
  { path: 'teacherreg', component: TeacherregComponent },
  { path: 'parenthome', component: ParenthomeComponent },
  { path: 'handled/:id', component: HandledComponent },
  { path: 'viewstudent/:id', component: ViewstudentComponent },
  { path: 'addmarks', component: AddmarksComponent },
  { path: 'addclass', component: AdminclassComponent },
  { path: 'adminevent', component: AdmineventComponent },
  { path: 'adminsetexm', component: AdminsetexmComponent },
  { path: 'adminstaff', component: AdminstaffComponent },
  { path: 'adminsubject', component: AdminsubjectComponent },
  { path: 'adminfeestruc', component: AdminfeestrucComponent },
  { path: 'adminnotice', component: AdminnoticeComponent },
  { path: 'teacherattend', component: TeacherattendComponent },
  { path: 'adminnonstaff', component: AdminnonstaffComponent },
  { path: 'adminadmiss', component: AdminadmissComponent },
  { path: 'adminn', component: AdminnComponent }









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
