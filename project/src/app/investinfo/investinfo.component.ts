import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DaoserviceService } from '../daoservice.service';

@Component({
  selector: 'app-investinfo',
  templateUrl: './investinfo.component.html',
  styleUrls: ['./investinfo.component.css']
})
export class InvestinfoComponent implements OnInit {
  investInfo:FormGroup;
  investRecord:any={
    Plan:'',
    text:'',
  };
  //Object Using to fetch//
  alluser2: any;
  alluserData2: any;
  store2: any = []
  obj2: any;
  idValue2: any;
  val2: any;
  constructor(private fb:FormBuilder,private svc:DaoserviceService,private http:HttpClient) {
    this.investInfo=this.fb.group({
      Plan:[this.investRecord.Plan],
      text:[this.investRecord.text]
    });
   }

  ngOnInit(): void {
  }
  get Plan() {
    return this.investRecord.get('Plan')!;
  }
  get text() {
    return this.investRecord.get('text')!;
  }
  get f(): {[key:string]:AbstractControl}{
    return this.investInfo.controls;
  }

  //Posting the data to CouchDB//
  onSubmit(Formvalue:any){
    console.log("from form", Formvalue);
    this.svc.investAdd(Formvalue).subscribe((data) => {
      console.log("data returned from server", data);
      Formvalue.reset();
  
    })
    
  }
  
}
