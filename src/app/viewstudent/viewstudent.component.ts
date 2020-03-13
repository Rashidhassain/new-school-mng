import { Student } from './../models/model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { RestService } from '../rest.service';
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


interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.scss']
})
export class ViewstudentComponent implements OnInit
{


  constructor(private rest: RestService, private route: ActivatedRoute,private fb:FormBuilder)
  {
    this.formss=this.fb.group({
      stid: [''],
      stname : [''],
      ftname: [''],
    mtname: [''],
     clsname: [''],
     gender: [''],
  pnum: [''],
     ftmail: [''],
     mtmail: [''],
     section: [''],
     address: [''],
      date: ['']
    });
    this.route.params.subscribe(params => this.doSearch(params));
  }
  formss: any;

  // tslint:disable-next-line: member-ordering
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

  // tslint:disable-next-line: member-ordering
  genders: Gender[] = [

    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
  ];

  // tslint:disable-next-line: member-ordering
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
  // tslint:disable-next-line: member-ordering
  days: Day[] = [

    { value: 'Monday', viewValue: 'Monday' },
    { value: 'Tuesday', viewValue: 'Tuesday' },
    { value: 'Wednesday', viewValue: 'Wednesday' },
    { value: 'Thursday', viewValue: 'Thursday' },
    { value: 'Friday', viewValue: 'Friday' },
    { value: 'Saturday', viewValue: 'Saturday' },



  ];
  public data1:Student = new Student();
  id: number;
  stid;
  stname;
  ftname;
mtname;
 clsname;
 gender;
pnum;
 ftmail;
 mtmail;
 section;
 address;
  date;

  doSearch(param)
  {
    this.id = param.id;
  }
  ngOnInit()
  {
    this.clasfetch1();
  }

  clasfetch1()
  {
    console.log(this.id);
    this.rest.clasfetch1One(this.id).subscribe((result) =>
    {
      if (result === undefined) {
        console.log(result);
      }
      else {
        console.log(result);

        this.stid=result.product.studentid;
        this.stname=result.product.studentname;
        this.ftname=result.product.fathername;
        this.mtname=result.product.mothername;
        this.clsname=result.product.classname;
        // console.log(this.clsname);
        this.gender=result.product.gender;
        // console.log(this.gender);

        this.pnum=result.product.phonenumber;
        this.ftmail=result.product.fathermail;
        this.mtmail=result.product.mothermail;
        this.section=result.product.section;
        // console.log(this.section);
        this.address=result.product.address;
        this.date=result.product.date;

      }
    });

  }
  // tslint:disable-next-line: adjacent-overload-signatures


  update1(){
    Object.assign(this.data1,this.formss.value);
    console.log(this.data1);
    if(this.formss.valid){
      this.rest.update1(this.data1,this.id).subscribe((result)=>{
        if(result===undefined){
          console.log(result);
        }
        else{
          this.clasfetch1();
          console.log('Here we go'+ result);
        }
      });
      }
      else{
        console.log('error');
      }
    }
  // tslint:disable-next-line: adjacent-overload-signatures
}
