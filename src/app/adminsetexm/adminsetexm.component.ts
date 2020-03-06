import { Component, OnInit } from '@angular/core';
interface Class {
  value: string;
  viewValue: string;
}


interface Exam {
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
  // tslint:disable-next-line: member-ordering
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

  ngOnInit() {
  }
}
