import { Component, OnInit } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  open() {
    const dialogRef = this.dialog.open(DemoComponent, {
      width: '530px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }
}