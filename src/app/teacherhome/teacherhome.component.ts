import { Component, OnInit } from '@angular/core';
interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-teacherhome',
  templateUrl: './teacherhome.component.html',
  styleUrls: ['./teacherhome.component.scss']
})
export class TeacherhomeComponent implements OnInit {

  constructor() { }
  genders: Gender[] = [

    {value: 'steak-0', viewValue: 'Male'},
    {value: 'pizza-1', viewValue: 'Female'}
  ];
  ngOnInit() {
  }

}
