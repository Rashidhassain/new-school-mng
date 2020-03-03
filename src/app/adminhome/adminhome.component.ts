import { Component, OnInit } from '@angular/core';

interface Food {
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


 interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
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

  constructor() { }
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


}
