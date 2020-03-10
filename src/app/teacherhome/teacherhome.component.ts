import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { HandledComponent } from '../handled/handled.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewstudentComponent } from '../viewstudent/viewstudent.component';
import { AddmarksComponent } from '../addmarks/addmarks.component';
import { TeacherattendComponent } from '../teacherattend/teacherattend.component';
import { AdminsetexmComponent } from '../adminsetexm/adminsetexm.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 import { Handled } from '../models/model';

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
public data:Handled = new Handled();
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

  }







  genders: Gender[] = [

    {value: '', viewValue: 'Male'},
    {value: 'pizza-1', viewValue: 'Female'}
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

    {value: '', viewValue: 'Test 1'},
    {value: 'steak-0', viewValue: 'Test 2	'},
    {value: 'steak-0', viewValue: 'Test 3'},
    {value: 'steak-0', viewValue: 'Prepratory 1'},
    {value: 'steak-0', viewValue: 'Prepratory 2'},
    {value: 'steak-0', viewValue: 'Prepratory 3	'},
    {value: 'steak-0', viewValue: 'Mid-Term Exam	'},
    {value: 'steak-0', viewValue: 'Annual Exam'}


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


  ngOnInit() {
    this.classfetch();
  }
  // handled class
  open()
  {
    const dialogRef = this.dialog.open(HandledComponent, {
      width: '530px',

    });

    dialogRef.afterClosed().subscribe(result =>
    {
      console.log('The dialog was closed');
    });
  }




























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
