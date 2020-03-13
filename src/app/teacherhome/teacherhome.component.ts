import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { HandledComponent } from '../handled/handled.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewstudentComponent } from '../viewstudent/viewstudent.component';
import { AddmarksComponent } from '../addmarks/addmarks.component';
import { TeacherattendComponent } from '../teacherattend/teacherattend.component';
import { AdminsetexmComponent } from '../adminsetexm/adminsetexm.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 import { Handled, Student } from '../models/model';

interface Gender {
  value: string;
  viewValue: string;
}
interface Class {
    value: string;
    viewValue: string;
  }

  interface Section {
    value: string;
    viewValue: string;
  }

  interface Day {
    value: string;
    viewValue: string;
  }


  interface Month {
    value: string;
    viewValue: string;
  }
  interface Exam {
    value: string;
    viewValue: string;
  }
@Component({
  selector: 'app-teacherhome',
  templateUrl: './teacherhome.component.html',
  styleUrls: ['./teacherhome.component.scss']
})
export class TeacherhomeComponent implements OnInit {
  public forms: FormGroup;
  public formss: FormGroup;
  public forms1: FormGroup;

public data:Handled = new Handled();
public data1:Student = new Student();
clas:any;
classf:any;


  constructor(public dialog: MatDialog,private  formBuilder: FormBuilder,private rest:RestService)
  {
    this.forms = this.formBuilder.group({
      cls: ['', [Validators.required]],
      sec: ['', [Validators.required]],
      sub: ['', [Validators.required]],
      day: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });


     this.formss = this.formBuilder.group({
       stid: ['', [Validators.required]],
        stname : ['', [Validators.required]],
        ftname: ['', [Validators.required]],
      mtname: ['', [Validators.required]],
       clsname: ['', [Validators.required]],
       gender: ['', [Validators.required]],
    pnum: ['', [Validators.required]],
       ftmail: ['', [Validators.required]],
       mtmail: ['', [Validators.required]],
       section: ['', [Validators.required]],
       address: ['', [Validators.required]],
        date: ['', [Validators.required]]

     });



     this.forms1 = this.formBuilder.group ({
      stid: ['', [Validators.required]],
      stname : ['', [Validators.required]],
      clsname: ['', [Validators.required]],
      section: ['', [Validators.required]],
      tof: ['', [Validators.required]],
      marks: ['', [Validators.required]],

    });
  }







  genders: Gender[] = [

    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
  ];
  classes: Class[] = [

    {value: 'I', viewValue: 'I'},
    {value: 'II', viewValue: 'II	'},
    {value: 'III', viewValue: 'III'},
    {value: 'IV', viewValue: 'IV'},
    {value: 'V', viewValue: 'V'},
    {value: 'VI', viewValue: 'VI	'},
    {value: 'VII', viewValue: 'VII	'},
    {value: 'VIII', viewValue: 'VIII	'},
    {value: 'IX', viewValue: 'IX	'},
    {value: 'X', viewValue: 'X'},
    {value: 'XI', viewValue: 'XI'},
    {value: 'XII', viewValue: 'XII'},

  ];

  sections: Section[] = [
    {value: 'A', viewValue: 'A'},
    {value: 'B', viewValue: 'B	'},
    {value: 'C', viewValue: 'C'},
    {value: 'D', viewValue: 'D'},
    {value: 'E', viewValue: 'E'},
    {value: 'F', viewValue: 'F	'},
    {value: 'G', viewValue: 'G	'},
    {value: 'H', viewValue: 'H	'}
  ];

  exams: Exam[] = [

    {value: 'Test 1', viewValue: 'Test 1'},
    {value: 'Test 2', viewValue: 'Test 2	'},
    {value: 'Test 3', viewValue: 'Test 3'},
    {value: 'Prepratory 1', viewValue: 'Prepratory 1'},
    {value: 'Preparatory 2', viewValue: 'Prepratory 2'},
    {value: 'Preapratory', viewValue: 'Prepratory 3	'},
    {value: 'Mid Term Exam', viewValue: 'Mid-Term Exam	'},
    {value: 'Annual Exam', viewValue: 'Annual Exam'}


  ];
  days: Day[] = [

    {value: 'Monday', viewValue: 'Monday'},
    {value: 'Tuesday', viewValue: 'Tuesday'},
    {value: 'Wednesday', viewValue: 'Wednesday'},
    {value: 'Thursday', viewValue: 'Thursday'},
    {value: 'Friday', viewValue: 'Friday'},
    {value: 'Saturday', viewValue: 'Saturday'},



  ];
  months: Month[] = [

    {value: 'JANUARY', viewValue: 'JANUARY'},
    {value: 'FEBRUARY', viewValue: 'FEBRUARY'},
    {value: 'MARCH', viewValue: 'MARCH'},
    {value: 'APRIL', viewValue: 'APRIL'},
    {value: 'MAY', viewValue: 'MAY'},
    {value: 'JULY', viewValue: 'JULY'},
    {value: 'AUGUST', viewValue: 'AUGUST'},
    {value: 'SEPTEMBER', viewValue: 'SEPTEMBER'},
    {value: 'OCTOBER', viewValue: 'OCTOBER'},
    {value: 'NOVEMBER', viewValue: 'NOVEMBER'},
    {value: 'DECEMBER', viewValue: 'DECEMBER'}




  ];

  // handled crud //
add(){
  Object.assign(this.data, this.forms.value);
  console.log(this.data);
  if(this.forms.valid){
  this.rest.clas(this.data).subscribe((result)=>{
    if(result===undefined){
      console.log(result);
    }
    else{
      this.classfetch();
      console.log('Here we go'+ result);
    }
  });
  }
  else{
    console.log('error');
  }
}



classfetch(){
  this.rest.clasfetch().subscribe((result)=>{
    if(result===undefined){
      console.log(result);
    }
    else{

      this.classf=result.product;
      console.log('Here we go'+ result);
    }
  });
}

dlt(id){
  this.rest.dlt(id).subscribe((result)=>{
    if(result===undefined){
      console.log(result);
    }
    else{
this.classfetch();
      console.log('Here we go'+ result);
    }
  });
}

// handled crud  ends//

/* student crud */
add1(){
  Object.assign(this.data1, this.formss.value);
  console.log(this.data1);
  if(this.formss.valid){
  this.rest.clas1(this.data1).subscribe((result)=>{
    if(result===undefined){
      console.log(result);
    }
    else{
      this.clasfetch1();
      console.log('Here we go');
    }
  });
  }

}
clasfetch1(){
  this.rest.clasfetch1().subscribe((result)=>{
    if(result===undefined){
      console.log(result);
    }
    else{

      this.clas=result.product;
      console.log('Here we go'+ result);
    }
  });
}
dlt1(id){
  this.rest.dlt1(id).subscribe((result)=>{
    if(result===undefined){
      console.log(result);
    }
    else{
this.clasfetch1();
      console.log('Here we go'+ result);
    }
  });
}
/*  student crud ends */

  ngOnInit() {
    this.classfetch();
    this.clasfetch1();
  }
  // handled class
  // open()
  // {
  //   const dialogRef = this.dialog.open(HandledComponent, {
  //     width: '530px',

  //   });

  //   dialogRef.afterClosed().subscribe(result =>
  //   {
  //     console.log('The dialog was closed');
  //   });
  // }





/* marks crude operation */
add2(){
  Object.assign(this.data, this.forms1.value);
  console.log(this.data);
  if(this.forms1.valid){
  this.rest.clas(this.data).subscribe((result)=>{
    if(result===undefined){
      console.log(result);
    }
    else{
      this.clasfetch1();
      console.log('Here we go');
    }
  });
  }

}
/* marks crud opeartion ends */








  open1()
  {
    const dialogRef = this.dialog.open(ViewstudentComponent, {
      width: '530px',

    });

    dialogRef.afterClosed().subscribe(result =>
    {
      console.log('The dialog was closed');
    });
  }


  open2()
  {
    const dialogRef = this.dialog.open(AddmarksComponent, {
      width: '530px',

    });

    dialogRef.afterClosed().subscribe(result =>
    {
      console.log('The dialog was closed');
    });
  }
    // viewstudent ends

open3()
{
  const dialogRef = this.dialog.open(TeacherattendComponent, {
    width: '530px',

  });

  dialogRef.afterClosed().subscribe(result =>
  {
    console.log('The dialog was closed');
  });
}

openn()
{
  const dialogRef = this.dialog.open(AdminsetexmComponent, {
    width: '530px',

  });

  dialogRef.afterClosed().subscribe(result =>
  {
    console.log('The dialog was closed');
  });
}
}
