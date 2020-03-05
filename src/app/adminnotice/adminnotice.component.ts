import { Component, OnInit } from '@angular/core';

interface Class {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-adminnotice',
  templateUrl: './adminnotice.component.html',
  styleUrls: ['./adminnotice.component.scss']
})
export class AdminnoticeComponent implements OnInit {

  constructor() { }
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

  ngOnInit() {
  }
}
