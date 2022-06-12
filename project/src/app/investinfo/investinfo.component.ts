import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DaoserviceService } from '../daoservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-investinfo',
  templateUrl: './investinfo.component.html',
  styleUrls: ['./investinfo.component.css']
})
export class InvestinfoComponent implements OnInit {
  investInfo:FormGroup;
  investRecord:any={
    Plan:''
   
  };
  //Object Using to fetch//
  alluser2: any;
  alluserData2: any;
  store2: any = []
  obj2: any;
  idValue2: any;
  val2: any;
  val:any;
  constructor(private fb:FormBuilder,private svc:DaoserviceService,private http:HttpClient,private toastr: ToastrService) {
    this.investInfo=this.fb.group({
      Plan:[this.investRecord.Plan]
    });
   }

  ngOnInit(): void {
   this.investRecord=this.fb.group({
      Plan:['',Validators.required]
   });
  }
  get Plan() {
    return this.investRecord.get('Plan')!;
  }
  
  get f(): {[key:string]:AbstractControl}{
    return this.investInfo.controls;
  }
  selectPlan(){
    return this.investInfo.value.Plan;
    // console.log(this.investInfo.value.Plan,"Plannnnnnnnn")
  }

  //Posting the data to CouchDB//
  onSubmit(Formvalue:any){
     console.log("from form", Formvalue);
     this.svc.investAdd(Formvalue).subscribe((data) => {
      console.log("data returned from server", data);
      this.toastr.success("Submitted Succesfully,Click Next Button");
      this.investInfo.reset();
    
  
    },
    err=>{
      this.toastr.error("Failed to submit",err);
    });
 
  }
  
}
