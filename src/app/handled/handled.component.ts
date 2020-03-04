import { Component, OnInit } from '@angular/core';

interface Section {
  value: string;
  viewValue: string;
}
interface Class {
  value: string;
  viewValue: string;
}

interface Day {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-handled',
  templateUrl: './handled.component.html',
  styleUrls: ['./handled.component.scss']
})
export class HandledComponent implements OnInit {

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
  days: Day[] = [

    {value: 'steak-0', viewValue: 'Monday'},
    {value: 'steak-0', viewValue: 'Tuesday'},
    {value: 'steak-0', viewValue: 'Wednesday'},
    {value: 'steak-0', viewValue: 'Thursday'},
    {value: 'steak-0', viewValue: 'Friday'},
    {value: 'steak-0', viewValue: 'Saturday'},



  ];
  ngOnInit() {
  }

}
