import { Component, OnInit } from '@angular/core';
interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-adminstaff',
  templateUrl: './adminstaff.component.html',
  styleUrls: ['./adminstaff.component.scss']
})
export class AdminstaffComponent implements OnInit {

  constructor() { }
  genders: Gender[] = [

    {value: 'steak-0', viewValue: 'Male'},
    {value: 'pizza-1', viewValue: 'Female'}
  ];

  ngOnInit() {
  }

}
