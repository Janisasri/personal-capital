import { Component, OnInit } from '@angular/core';
import { nodeservice } from '../nodeservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  loginrecord: any = {
    emailId: '',
    Password: '',
  };

  //For Local Storage SetItem (Obj1)//
  obj1: any = {
    Username: '',
    Password: '',
    Confirmpassword: '',
    emailId: '',
    fullName: '',
    _id: '',
  };

  constructor(
    private fb: FormBuilder,
    private api: nodeservice,
    private router: Router,
    private Daoservice: DaoserviceService,
    public activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log('UserDAta', res);
    });
  }
  ngOnInit(): void {
    this.loginform = this.fb.group({
      emailId: [''],
      Password: ['', [Validators.minLength(8)]],
    });
  }

  get emailId() {
    return this.loginform.get('emailId')!;
  }
  get Password() {
    return this.loginform.get('Password')!;
  }
  login(Formvalue: any) {
    const selector = {
      selector: {
        emailId: Formvalue.emailId,
        Password: Formvalue.Password,
      },
    };
    this.Daoservice.login(selector).subscribe(
      (response: any) => {
        console.log(response);
        if (response.docs.length <= 0) {
          this.toastr.error('login failed');
          return;
        }

        let data = response['docs'][0];
        localStorage.setItem('loggedInUser', data);

        //Declaring our Fields in Array Format for Local Storage Purpose//
        let datas = {
          Confirmpassword: data.Confirmpassword,
          Password: data.Password,
          Username: data.Username,
          emailId: data.emailId,
          fullName: data.fullName,
          id: data._id,
        };
        localStorage.setItem('obj1', JSON.stringify(datas));
        this.toastr.success('login succesfull');

        this.router.navigate(['/dashboard']);
      },
      (err) => {
        this.toastr.error('login failed');
     
        console.log(err);
      }
    );

    console.log(Formvalue.emailId);

    
  }
}
