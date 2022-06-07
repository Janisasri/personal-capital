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
  login(Formvalue:any) {
    this.api.test_get(Formvalue.emailId).subscribe((data) => {
      console.log("Data",data);
      const userData ={data:JSON.stringify(data.docs[0]) }
      localStorage.setItem('obj1',JSON.stringify(data.docs[0]))

      if (data.docs.length <= 0) {
        this.toastr.error("Please Register");
       

      }
      if (data.docs[0].emailId === Formvalue.emailId) {
        if (data.docs[0].Password === Formvalue.Password) {

          this.router.navigate(['/dashboard'],
           {
            queryParams: userData
          })
         this.toastr.success("Login Successfully");
        }
        
      }
      else {
        this.toastr.error("Enter Correct Password");
        

      }
    })

  }
}
    
  
