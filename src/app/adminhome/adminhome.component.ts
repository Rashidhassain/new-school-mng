import { Component, OnInit } from '@angular/core';
import { AdminclassComponent } from '../adminclass/adminclass.component';
import { MatDialog } from '@angular/material';
import { AdminsubjectComponent } from '../adminsubject/adminsubject.component';
import { AdminstaffComponent } from '../adminstaff/adminstaff.component';
import { AdminsetexmComponent } from '../adminsetexm/adminsetexm.component';
import { AdminfeestrucComponent } from '../adminfeestruc/adminfeestruc.component';
import { AdmineventComponent } from '../adminevent/adminevent.component';
import { AdminnoticeComponent } from '../adminnotice/adminnotice.component';
import { AdminnonstaffComponent } from '../adminnonstaff/adminnonstaff.component';
import { AdminadmissComponent } from '../adminadmiss/adminadmiss.component';

interface Food {
  value: string;
  viewValue: string;
}
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






// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }


@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  foods: Food[] = [

    {value: 'steak-0', viewValue: 'Morning'},
    {value: 'pizza-1', viewValue: 'Afternoon'},
    {value: 'tacos-2', viewValue: 'Evening'}
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
  genders: Gender[] = [

    {value: 'steak-0', viewValue: 'Male'},
    {value: 'pizza-1', viewValue: 'Female'}
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

  // startDate = new Date(1990, 0, 1);

  ngOnInit() {
  }

  // class
  open()
  {
    const dialogRef = this.dialog.open(AdminclassComponent, {
      width: '530px',

    });

    dialogRef.afterClosed().subscribe(result =>
    {
      console.log('The dialog was closed');
    });
  }

// class ends


//  subject
  open1()
  {
    const dialogRef = this.dialog.open(AdminsubjectComponent, {
      width: '530px',

    });

    dialogRef.afterClosed().subscribe(result =>
    {
      console.log('The dialog was closed');
    });
  }
// subject ends

//  staff

open2()
{
  const dialogRef = this.dialog.open(AdminstaffComponent, {
    width: '530px',

  });

  dialogRef.afterClosed().subscribe(result =>
  {
    console.log('The dialog was closed');
  });
}
//  staff ends
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


// fee
open7()
{
  const dialogRef = this.dialog.open(AdminfeestrucComponent, {
    width: '530px',

  });

  dialogRef.afterClosed().subscribe(result =>
  {
    console.log('The dialog was closed');
  });
}

// fee ends
// event
open10()
{
  const dialogRef = this.dialog.open(AdmineventComponent, {
    width: '530px',

  });

  dialogRef.afterClosed().subscribe(result =>
  {
    console.log('The dialog was closed');
  });
}
//  event ends

// notice
open11()
{
  const dialogRef = this.dialog.open(AdminnoticeComponent, {
    width: '530px',

  });

  dialogRef.afterClosed().subscribe(result =>
  {
    console.log('The dialog was closed');
  });
}

open12()
{
  const dialogRef = this.dialog.open(AdminnonstaffComponent, {
    width: '530px',

  });

  dialogRef.afterClosed().subscribe(result =>
  {
    console.log('The dialog was closed');
  });
}
open13()
{
  const dialogRef = this.dialog.open(AdminadmissComponent, {
    width: '530px',

  });

  dialogRef.afterClosed().subscribe(result =>
  {
    console.log('The dialog was closed');
  });
}
// notice ends
}


