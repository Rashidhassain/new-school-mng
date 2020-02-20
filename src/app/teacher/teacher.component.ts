import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Demo2Component } from '../demo2/demo2.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  open() {
    const dialogRef = this.dialog.open(Demo2Component, {
      width: '530px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }
}
