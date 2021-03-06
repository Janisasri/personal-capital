import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,AbstractControl} from '@angular/forms';
import { DaoserviceService } from '../daoservice.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.css']
})
export class CarddetailsComponent implements OnInit {
  cardDetails:FormGroup;
  submitted=false;
   
    typeSelected:string;
  //Array object Declaration//
  cardrecord:any={
    PayeeName:'',
    AccountNumber:'',
    IFSCcode:'',
    AccountType:'',
  
    InvestingAmount:'',
    PhoneNumber:'',
    TypeYourOwn:'',
   };

  //Object using to fetching//
  alluser1: any;
  alluserData1: any;
  store1: any = []
  obj1: any;
  idValue1: any;
  val1: any;

  constructor(private fb:FormBuilder,public spinnerService:NgxSpinnerService,private api:DaoserviceService,private http:HttpClient,private toastr: ToastrService,private router:Router) {
    this.typeSelected = 'ball-fussion';
    this.cardDetails=this.fb.group({
      PayeeName:[this.cardrecord.PayeeName],
      AccountNumber:[this.cardrecord. AccountNumber],
      IFSCcode:[this.cardrecord.IFSCcode],
      AccountType:[this.cardrecord.AccountType],
      
      InvestingAmount:[this.cardrecord.InvestingAmount],
      PhoneNumber:[this.cardrecord.PhoneNumber],
      TypeYourOwn:[this.cardrecord.TypeYourOwn],
      });
   }

   public showSpinner():void {
     this.spinnerService.show();
     

     setTimeout(() => {
       this.spinnerService.hide();
     this.router.navigate(['/view'])
    },3000);
     
}

  ngOnInit(): void {

    this.cardDetails=this.fb.group(
      {
        PayeeName: ['',Validators.required],
        AccountNumber: ['',Validators.required],
        IFSCcode: ['',Validators.required],
        AccountType: ['',Validators.required],
      
        InvestingAmount: ['',Validators.required],
        PhoneNumber: ['',Validators.required],
        TypeYourOwn: ['',Validators.required],
      }
    );
  }
  get PayeeName() {
    return this.cardrecord.get('PayeeName')!;

  }
  get AccountNumber() {
    return this.cardrecord.get('AccountNumber')!;
  }
  get IFSCcode() {
    return this.cardrecord.get('IFSCcode')!;
  }
  get AccountType() {
    return this.cardrecord.get('AccountType')!;
  }
  
  get InvestingAmount() {
    return this.cardrecord.get('InvestingAmount')!;
  }
  get PhoneNumber() {
    return this.cardrecord.get('PhoneNumber')!;
  }
  get TypeYourOwn() {
    return this.cardrecord.get('TypeYourOwn')!;
  }
   get f(): {[key:string]:AbstractControl}{
    return this.cardDetails.controls;
   }

 
  
  
   //Posting our Form data to CouchDB// 
  onSubmit(Formvalue:any){
  console.log("from form", Formvalue);
  this.api.addData(Formvalue).subscribe((data) => {
  console.log("data returned from server", data);
  this.toastr.success("Submitted,Click Next button");

   
},
err=>{
  this.toastr.error("Failed to submit",err);
});

  }
}
