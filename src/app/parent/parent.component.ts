import { Component, OnInit } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';
import { MatDialog } from '@angular/material/dialog';
import { RestService } from '../rest.service';
import { Register } from '../models/model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public forms: FormGroup;
  public data: Register = new Register();
  // invalidlogin: boolean = false;
  successfull: boolean = false;
  constructor(public dialog: MatDialog,private root:Router,private formBuilder: FormBuilder, private rest: RestService)

  {
    this.forms = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  open() {
    const dialogRef = this.dialog.open(DemoComponent, {
      width: '530px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }

  login()  {
    Object.assign(this.data, this.forms.value);
    console.log(this.data);
    this.rest.Login(this.data).subscribe((result) =>
    {
      if (result === undefined) {
        console.log(result);
      } else {
        this.rest.sendToken(result.accessToken);
        this.root.navigate(['/parenthome']);
        this.successfull = true;
        // this.invalidlogin = false;
      }
    }, (err) =>
    {
      if (err.status === 400) {
        // this.invalidlogin = true;

      }
      console.log(err);

    });
  }
}
