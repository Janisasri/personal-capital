import { Component, OnInit } from '@angular/core';
import { nodeservice } from '../nodeservice.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DaoserviceService } from '../daoservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  loginform: FormGroup;
  submitted=false;
  loginrecord: any = {
    emailId: '',
    Password: '',
  };

constructor(
    private fb: FormBuilder,
    private api: nodeservice,
    private router: Router,
    private Daoservice: DaoserviceService,
    public activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.loginform = this.fb.group({
      emailId:[this.loginrecord.emailId],
      Password:[this.loginrecord.Password]
    })
  }
  ngOnInit(): void {
    this.loginform = this.fb.group({
      emailId: ['',[Validators.required,Validators.email,Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      Password: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(40)]]
    });
  }

  get emailId() {
    return this.loginform.get('emailId')!;
  }
  get Password() {
    return this.loginform.get('Password')!;
  }
  get f():{[key:string]:AbstractControl} {
    return this.loginform.controls;
  }
  login(Formvalue:any) {
    let datas ={
      emailId : Formvalue.emailId
    }
    this.api.test_get(datas).subscribe((data) => {
      console.log("Data",data);
      const userData ={data:JSON.stringify(data.docs[0]) }
      localStorage.setItem('obj1',JSON.stringify(data.docs[0]))

      if (data.docs.length <= 0) {
        this.toastr.error("Invalid credentials");
      }
      if (data.docs[0].emailId === Formvalue.emailId) 
      {
        if (data.docs[0].Password === Formvalue.Password) 
        {
          this.toastr.success("Login Successfully");
          this.router.navigate(['/dashboard'],
           { queryParams: userData   })
        } else {
          this.toastr.error("Enter Correct Password");
        }
      }
    
    })

  }
}
    
  
