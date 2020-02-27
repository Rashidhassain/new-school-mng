import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';

import { Register } from '../models/model';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {
  public forms: FormGroup;
  // tslint:disable-next-line: typedef-whitespace
  public data: Register = new Register();
  errmsg: boolean = false;
  valid: boolean = false;
  showMsg: any;
  constructor(private formBuilder: FormBuilder, private rest: RestService
  ) {
    this.forms = this.formBuilder.group({
      last: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
      cpassword: ['', [Validators.required]],

      roles: this.formBuilder.array(['USER']),
    });
  }

  ngOnInit() {

  }

  Regi() {
    console.log('hi');
    console.log(this.forms);

    Object.assign(this.data, this.forms.value);
    console.log(this.data);
    if (this.forms.valid) {


      this.rest.doRegister(this.data).subscribe((result) => {

        if (result === undefined) {

          console.log(result);


          this.errmsg = true;



        } else {
          this.errmsg = false;
          this.showMsg = true;


          this.rest.sendToken(result.accessToken);

          console.log(this.rest.sendToken(result.accessToken));


        }
      }, (err) => {
        this.errmsg = true;
        console.log(err);
        // this.closeDialog();

      });
    } else {
      alert('false');

    }
  }

}










