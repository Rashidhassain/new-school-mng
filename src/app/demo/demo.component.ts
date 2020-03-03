import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { Register } from '../models/model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit
{
  public forms: FormGroup;


  public data: Register = new Register();
  email: boolean;
  successfull: boolean;
  emailvalid: boolean;
  // successfull: boolean = false;
  // emailvalid: boolean = false;
  // email: boolean = false;
  constructor(private formBuilder: FormBuilder, private rest: RestService)
  {
    this.forms = this.formBuilder.group({
      lname: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      stid: ['', [Validators.required]],
      stname: ['', [Validators.required]],
      tel: ['', [Validators.required]],

      cpassword: ['', [Validators.required]],
      roles: this.formBuilder.array(['PARENT']),
    });
  }
  ngOnInit()
  {
  }



Reg()
{
  Object.assign(this.data, this.forms.value);
  console.log(this.data);
  // this.forms.setValidators(this.passwordMatchValidator);
  this.forms.updateValueAndValidity();
  const x = this.forms.get('email').value;
  const atposition = x.indexOf('@');
  const dotposition = x.lastIndexOf('.');
  if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
    this.email = true;
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
