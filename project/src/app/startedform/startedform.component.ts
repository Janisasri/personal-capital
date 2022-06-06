import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,AbstractControl, FormBuilder} from '@angular/forms';
import  Validation from './utils/validation';
import { nodeservice } from '../nodeservice.service';
import { HttpClient } from '@angular/common/http';
import { DaoserviceService } from '../daoservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-startedform',
  templateUrl: './startedform.component.html',
  styleUrls: ['./startedform.component.css']
})
export class StartedformComponent implements OnInit {
  checkout: FormGroup;
  submitted = false;
  //Array in Object//
  userRecord: any ={
    fullName:'',
    Username:'',
    emailId:'',
    Password:'',
    Confirmpassword:'',
  };
 
  constructor(private fb:FormBuilder,private api:nodeservice, private http:HttpClient,private svc:DaoserviceService,private toastr:ToastrService,private router:Router) { 

    this.checkout=this.fb.group({
      fullName:[this.userRecord.fullName],
      Username :[this.userRecord.Username],
      emailId:[this.userRecord. emailId],
      Password:[this.userRecord.Password],
      Confirmpassword:[this.userRecord.Confirmpassword],
      

    });
  }

  ngOnInit(): void {
    this.checkout = this.fb.group(
      {
        fullname: ['',Validators.required],
        username:[
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email:['',[Validators.required,Validators.email]],
        password:[
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword:['',Validators.required],
        acceptTerms:[false,Validators.requiredTrue]
      },
      {
        validators:[Validation.match('password','confirmPassword')]
      }
    );
    }
    get fullName() {
      return this.checkout.get('fullName')!;
    }
    get Username() {
      return this.checkout.get('Username')!;
    }
    get emailId() {
      return this.checkout.get('emailId')!;
    }
    get Password() {
      return this.checkout.get('Password')!;
    }
    get Confirmpassword() {
      return this.checkout.get('Confirmpassword')!;
    }

    get f(): {[key:string]:AbstractControl} {
      return this.checkout.controls;
    }
    //Posting the data in couchDB//
    onSubmit(Formvalue:any): void {
     
      console.log("from form",Formvalue);
      this.api.storedata(Formvalue).subscribe((data) => {
        console.log("data returned from server",data);
      
      })
      this.submitted=true;
      if (this.checkout.invalid)  {
        // this.toastr.error("Please fill the form");
       return;
      }
      else if (this.checkout.valid) {

        this.toastr.success("Registered Successfully");
         this.router.navigate(['/home']);
      }
      console.log(JSON.stringify(this.checkout.value,null,2));
    }
      //Reset Function//
      onReset():void {
      this.submitted=false;
      this.checkout.reset();
    }
    
}



