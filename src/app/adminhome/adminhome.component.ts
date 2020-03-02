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







// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

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
    {value: 'steak-0', viewValue: 'F	'}


  ];

  // startDate = new Date(1990, 0, 1);

  ngOnInit() {
  }


}
