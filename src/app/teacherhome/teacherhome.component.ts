import { Component, OnInit } from '@angular/core';
import { HandledComponent } from '../handled/handled.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewstudentComponent } from '../viewstudent/viewstudent.component';
import { AddmarksComponent } from '../addmarks/addmarks.component';
import { TeacherattendComponent } from '../teacherattend/teacherattend.component';
import { AdminsetexmComponent } from '../adminsetexm/adminsetexm.component';
import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../rest.service';

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
  forms: any;

  constructor(public dialog: MatDialog,private formBuilder: FormBuilder, private rest: RestService)
  {
    this.forms = this.formBuilder.group({
      lname: ['', [Validators.required]],
      name: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required]],
      number: ['', [Validators.required]],
      password: ['', [Validators.required]],
      cpassword: ['', [Validators.required]],
      role: 'TEACHER',
    });



   }


  genders: Gender[] = [

    {value: 'steak-0', viewValue: 'Male'},
    {value: 'pizza-1', viewValue: 'Female'}
  ];
  classes: Class[] = [

    {value: 'steak-0', viewValue: 'I'},
    {value: 'steak-0', viewValue: 'II	'},
    {value: 'steak-0', viewValue: 'III'},
    {value: 'steak-0', viewValue: 'IV'},
    {value: 'steak-0', viewValue: 'V'},
    {value: 'steak-0', viewValue: 'VI	'},
    {value: 'steak-0', viewValue: 'VII	'},
    {value: 'steak-0', viewValue: 'VIII	'},
    {value: 'steak-0', viewValue: 'IX	'},
    {value: 'steak-0', viewValue: 'X'},
    {value: 'steak-0', viewValue: 'XI'},
    {value: 'steak-0', viewValue: 'XII'},

  ];

  sections: Section[] = [

    {value: 'steak-0', viewValue: 'A'},
    {value: 'steak-0', viewValue: 'B	'},
    {value: 'steak-0', viewValue: 'C'},
    {value: 'steak-0', viewValue: 'D'},
    {value: 'steak-0', viewValue: 'E'},
    {value: 'steak-0', viewValue: 'F	'},
    {value: 'steak-0', viewValue: 'G	'},
    {value: 'steak-0', viewValue: 'H	'}



  ];

  exams: Exam[] = [

    {value: 'steak-0', viewValue: 'Test 1'},
    {value: 'steak-0', viewValue: 'Test 2	'},
    {value: 'steak-0', viewValue: 'Test 3'},
    {value: 'steak-0', viewValue: 'Prepratory 1'},
    {value: 'steak-0', viewValue: 'Prepratory 2'},
    {value: 'steak-0', viewValue: 'Prepratory 3	'},
    {value: 'steak-0', viewValue: 'Mid-Term Exam	'},
    {value: 'steak-0', viewValue: 'Annual Exam'}


  ];
  days: Day[] = [

    {value: 'steak-0', viewValue: 'Monday'},
    {value: 'steak-0', viewValue: 'Tuesday'},
    {value: 'steak-0', viewValue: 'Wednesday'},
    {value: 'steak-0', viewValue: 'Thursday'},
    {value: 'steak-0', viewValue: 'Friday'},
    {value: 'steak-0', viewValue: 'Saturday'},



  ];
  months: Month[] = [

    {value: 'steak-0', viewValue: 'JANUARY'},
    {value: 'steak-0', viewValue: 'FEBRUARY'},
    {value: 'steak-0', viewValue: 'MARCH'},
    {value: 'steak-0', viewValue: 'APRIL'},
    {value: 'steak-0', viewValue: 'MAY'},
    {value: 'steak-0', viewValue: 'JULY'},
    {value: 'steak-0', viewValue: 'AUGUST'},
    {value: 'steak-0', viewValue: 'SEPTEMBER'},
    {value: 'steak-0', viewValue: 'OCTOBER'},
    {value: 'steak-0', viewValue: 'NOVEMBER'},
    {value: 'steak-0', viewValue: 'DECEMBER'}




  ];



  ngOnInit() {
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
  // handled clas end


  // viewstudent
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
