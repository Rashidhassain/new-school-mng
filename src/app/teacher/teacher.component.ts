import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Demo2Component } from '../demo2/demo2.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { Register } from '../models/model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit
{
  public forms: FormGroup;
  public data: Register = new Register();
  invalidlogin: boolean = false;
  successfull: boolean = false;


  constructor(private formBuilder: FormBuilder, private rest: RestService, public dialog: MatDialog)
{
    this.forms = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  ngOnInit()
  {
  }

  open()
  {
    const dialogRef = this.dialog.open(Demo2Component, {
      width: '530px',

    });

    dialogRef.afterClosed().subscribe(result =>
    {
      console.log('The dialog was closed');
    });
  }

login()
  {
    Object.assign(this.data, this.forms.value);
    console.log(this.data);
    this.rest.doLogin(this.data).subscribe((result) =>
    {
      if (result === undefined) {
        console.log(result);
      } else {
        // this.rest.sendToken(result.accessToken);
        this.successfull = true;
        this.invalidlogin = false;
      }
    }, (err) =>
    {
      if (err.status === 400) {
        this.invalidlogin = true;

      }
      console.log(err);

    });
  }
}
