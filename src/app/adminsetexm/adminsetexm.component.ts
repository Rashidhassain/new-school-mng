import { Component, OnInit } from '@angular/core';
interface Class {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-adminsetexm',
  templateUrl: './adminsetexm.component.html',
  styleUrls: ['./adminsetexm.component.scss']
})
export class AdminsetexmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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
}
