import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DaoserviceService } from '../daoservice.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-childbank',
  templateUrl: './childbank.component.html',
  styleUrls: ['./childbank.component.css']
})
export class ChildbankComponent implements OnInit {
  childInfo:FormGroup;
  childRecord:any={
    child:''
  };
  alluser2: any;
  alluserData2: any;
  store2: any = []
  obj2: any;
  idValue2: any;
  val2: any;
  val:any;
  constructor(private fb:FormBuilder,private svc:DaoserviceService,private http:HttpClient,private toastr:ToastrService) { 
    this.childInfo=this.fb.group({
      child:[this.childRecord.child]
    });
  }
      
  ngOnInit(): void {
    this.childRecord = this.fb.group({
      child:['',Validators.required]
    });
  }
  get child() {
    return this.childRecord.get('child')!;
  }
  
  get f(): {[key:string]:AbstractControl}{
    return this.childInfo.controls;
  }

  onSubmit(Formvalue:any) {
    console.log("from form", Formvalue);
     this.svc.childAdd(Formvalue).subscribe((data) => {
      console.log("data returned from server", data);
      this.toastr.success("Submitted Succesfully,Click back Button");
      this.childInfo.reset();
  },
  err=>{
    this.toastr.error("Failed to submit",err);
  });

}
}
