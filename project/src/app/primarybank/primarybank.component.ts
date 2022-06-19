import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,AbstractControl, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DaoserviceService } from '../daoservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-primarybank',
  templateUrl: './primarybank.component.html',
  styleUrls: ['./primarybank.component.css']
})
export class PrimarybankComponent implements OnInit {
   payment:FormGroup;

   paymentRecord: any={
    cardHolder:'',
    month:'',
    year:'',
    cardNumber:'',
    cvc:''
   };

       //Objects Using to fetch//
  alluser: any = [];
  alluserData: any;
  store: any = []
  obj: any;
  idValue: any;
  val: any;
  res:any;
  fetch:any
  constructor(private fb:FormBuilder,private api:DaoserviceService, private http:HttpClient,private router:Router,private toastr: ToastrService) { 
     this.payment = this.fb.group({
      cardHolder:[this.paymentRecord.cardHolder],
      year:[this.paymentRecord.year],
      month:[this.paymentRecord.date],
      cardNumber:[this.paymentRecord.cardNumber],
      cvc:[this.paymentRecord.cvc],
     });
  }

  ngOnInit(): void {
    this.payment=this.fb.group({
      cardHolder: ['',Validators.required],
      year: ['',Validators.required],
      month:['',Validators.required],
      cardNumber: ['',Validators.required],
      cvc: ['',Validators.required],
    });
  }
  get cardHolder() {
    return this.paymentRecord.get('cardHolder')!;
  }
  get year() {
    return this.paymentRecord.get('date')!;
  }
  get month() {
    return this.paymentRecord.get('month')!;
  }
  get cardNumber() {
    return this.paymentRecord.get('cardNumber')!;
  }
  get cvc() {
    return this.paymentRecord.get('cvc')!;
  }
  get f(): {[key:string]:AbstractControl}{
    return this.payment.controls;
   }

  onSubmit(Formvalue:any) {
    this.api.fetchData("paymentInfo").subscribe(res=>{
      this.val=res;
      
      console.log(this.val.rows.length);
      
      if(this.val.rows.length < 1){
        // this.router.navigate(['/payment'], )

        console.log("from form",Formvalue);
        this.api.paymentAdd(Formvalue).subscribe((data) =>{
        console.log("Data returned from server",data);
        this.toastr.success("Form Submitted Succesfully,Click back button");
         this.payment.reset();
        },
        err=>{
        this.toastr.error("Form Failed to Submitted",err);
          
        }
        );
      }
      else{
       this.toastr.warning("You cannot enter form Again!!,Click Offers to link SubBanks");
      }
    });
  }

}
