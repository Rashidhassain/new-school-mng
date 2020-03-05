import { Component, OnInit } from '@angular/core';
interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-adminnonstaff',
  templateUrl: './adminnonstaff.component.html',
  styleUrls: ['./adminnonstaff.component.scss']
})
export class AdminnonstaffComponent implements OnInit {

  constructor() { }
  genders: Gender[] = [

    {value: 'steak-0', viewValue: 'Male'},
    {value: 'pizza-1', viewValue: 'Female'}
  ];

  ngOnInit() {
  }
}
