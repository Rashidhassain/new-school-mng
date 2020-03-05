import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}


interface Class {
  value: string;
  viewValue: string;
}


interface shift {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-adminevent',
  templateUrl: './adminevent.component.html',
  styleUrls: ['./adminevent.component.scss']
})
export class AdmineventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  shifts: shift[] = [

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

}
