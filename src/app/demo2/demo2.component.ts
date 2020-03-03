import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { FormGroup } from '@angular/forms';

import { Register } from '../models/model';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit
{
  public forms: FormGroup;

  public data: Register = new Register();
  successfull: boolean = false;
  emailvalid: boolean = false;
  email: boolean = false;
  showMsg: any;
  constructor(private formBuilder: FormBuilder, private rest: RestService)
  {
    this.forms = this.formBuilder.group({
      lname: ['', [Validators.required]],
      name: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required]],
      number: ['', [Validators.required]],
      password: ['', [Validators.required]],
      cpassword: ['', [Validators.required]],
      role: 'TEACHER',
    });
  }
  ngOnInit()
  {
  }


  passwordMatchValidator(group: FormGroup): any
  {
    if (group) {
      if (group.get('password').value !== group.get('cpassword').value) {
        return { notMatching: true };
      }
    }
    return null;
  }
  Regi()
  {
    Object.assign(this.data, this.forms.value);
    console.log(this.data);
    this.forms.setValidators(this.passwordMatchValidator);
    this.forms.updateValueAndValidity();
    const x = this.forms.get('email').value;
    const atposition = x.indexOf('@');
    const dotposition = x.lastIndexOf('.');
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
      this.email = true;
      return false;
    }
    this.rest.doRegister(this.data).subscribe((result) =>
    {
      if (result === undefined) {
        console.log(result);
      } else {

        this.successfull = true;
        this.emailvalid = false;

      }
    }, (err) =>
    {
      if (err.status === 400) {
        this.emailvalid = true;
      }
      console.log(err);

    });


  }

}










