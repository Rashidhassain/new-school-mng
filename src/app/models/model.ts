export class Register {

    lname: string;
    tel: string;
    address: string;
    name: string;
    email: string;
    number: string;
    password: string;
    cpassword: string;
}

export class Handled{
    date:string;
    day:string;
    sub:string;
    sec:string;
    cls:string;
}


export class Student{
    stid:string;
    stname:string;
    ftname:string;
    mtname:string;
    clsname:string;
    gender:string;
    pnum:string;
    ftmail:string;
    mtmail:string;
    section:string;
    address:string;
    date:string;

}

export class Mark{
     stid:string;
 stname:string;
 clsname:string;
      marks:string;

 section:string;
 typeofexam:string;

}

export class Teacherattendence{
stid:string;
stname:string;
clsname:string;
section:string;
month:string;
numberofdays:string;
presentdays:string;
absentdays:string;

}

export class Teacherexam{
    exmname:string;
    clsname:string;
    section:string;
    subject:string;
    typeofexam:string;
    date:string;

    }
