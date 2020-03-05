import { Component, OnInit } from '@angular/core';
interface Class {
  value: string;
  viewValue: string;
}

interface Month {
  value: string;
  viewValue: string;
}

interface Section {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-teacherattend',
  templateUrl: './teacherattend.component.html',
  styleUrls: ['./teacherattend.component.scss']
})
export class TeacherattendComponent implements OnInit {

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
}
