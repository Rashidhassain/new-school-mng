import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-adminadmiss',
  templateUrl: './adminadmiss.component.html',
  styleUrls: ['./adminadmiss.component.scss']
})
export class AdminadmissComponent implements OnInit {

  constructor() { }
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
  ngOnInit() {
  }
}
