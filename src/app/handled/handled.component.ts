import { Handled } from './../models/model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { ActivatedRoute } from '@angular/router';

interface Section
{
  value: string;
  viewValue: string;
}
interface Class
{
  value: string;
  viewValue: string;
}

interface Day
{
  value: string;
  viewValue: string;
}
interface Month
{
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-handled',
  templateUrl: './handled.component.html',
  styleUrls: ['./handled.component.scss']
})
export class HandledComponent implements OnInit
{
  public forms:FormGroup;
  classes: Class[] = [
    { value: 'I', viewValue: 'I' },
    { value: 'II', viewValue: 'II	' },
    { value: 'III', viewValue: 'III' },
    { value: 'IV', viewValue: 'IV' },
    { value: 'V', viewValue: 'V' },
    { value: 'VI', viewValue: 'VI	' },
    { value: 'VII', viewValue: 'VII	' },
    { value: 'VIII', viewValue: 'VIII	' },
    { value: 'IX', viewValue: 'IX	' },
    { value: 'X', viewValue: 'X' },
    { value: 'XI', viewValue: 'XI' },
    { value: 'XII', viewValue: 'XII' },
  ];

  sections: Section[] = [
    { value: 'A', viewValue: 'A' },
    { value: 'B', viewValue: 'B	' },
    { value: 'C', viewValue: 'C' },
    { value: 'D', viewValue: 'D' },
    { value: 'E', viewValue: 'E' },
    { value: 'F', viewValue: 'F	' },
    { value: 'G', viewValue: 'G	' },
    { value: 'H', viewValue: 'H	' }
  ];
  days: Day[] = [
    { value: 'Monday', viewValue: 'Monday' },
    { value: 'Tuesday', viewValue: 'Tuesday' },
    { value: 'Wednesday', viewValue: 'Wednesday' },
    { value: 'Thursday', viewValue: 'Thursday' },
    { value: 'Friday', viewValue: 'Friday' },
    { value: 'Saturday', viewValue: 'Saturday' },
  ];
  months: Month[] = [
    { value: 'JANUARY', viewValue: 'JANUARY' },
    { value: 'FEBRUARY', viewValue: 'FEBRUARY' },
    { value: 'MARCH', viewValue: 'MARCH' },
    { value: 'APRIL', viewValue: 'APRIL' },
    { value: 'MAY', viewValue: 'MAY' },
    { value: 'JULY', viewValue: 'JULY' },
    { value: 'AUGUST', viewValue: 'AUGUST' },
    { value: 'SEPTEMBER', viewValue: 'SEPTEMBER' },
    { value: 'OCTOBER', viewValue: 'OCTOBER' },
    { value: 'NOVEMBER', viewValue: 'NOVEMBER' },
    { value: 'DECEMBER', viewValue: 'DECEMBER' }
  ];
  public data:Handled = new Handled();
  id: number;
cls;
sec;
sub;
day;
date;
  constructor(private rest: RestService, private route: ActivatedRoute,private fb:FormBuilder)
  {
    this.forms=this.fb.group({
    sub:[''],
    cls:[''],
    day:[''],
    date:[''],
    sec:[''],
    });
    this.route.params.subscribe(params => this.doSearch(params));
  }

  doSearch(param)
  {
    this.id = param.id;
  }


  ngOnInit()
  {
    this.classfetch();
  }
  classfetch()
  {
    this.rest.clasfetchOne(this.id).subscribe((result) =>
    {
      if (result === undefined) {
        console.log(result);
      }
      else {
        this.cls=result.product.class;
        this.sub=result.product.subject;
        this.date=result.product.date;
        this.day=result.product.day;
        this.sec=result.product.section;
      }
    });
  }

  update(){
    Object.assign(this.data,this.forms.value);
    console.log(this.data);
    if(this.forms.valid){
      this.rest.update(this.data,this.id).subscribe((result)=>{
        if(result===undefined){
          console.log(result);
        }
        else{
          this.classfetch();
          console.log('Here we go'+ result);
        }
      });
      }
      else{
        console.log('error');
      }
    }

}
