import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,AbstractControl, FormBuilder} from '@angular/forms';
import { DaoserviceService } from '../daoservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addinfo',
  templateUrl: './addinfo.component.html',
  styleUrls: ['./addinfo.component.css']
})
export class AddinfoComponent implements OnInit {
  addinfo:FormGroup;
  submitted=false;

   //Array Object//
  addRecord: any ={
    FirstName:'',
    LastName:'',
    Occupation:'',
    NetWorth:'',
    Retirement:'',
    Gender:'',
    locationInfo:'',
    PhoneNumber:'',
    Address:'',
    Postal:'',
    checkbox:'',
    };

    //Objects Using to fetch//
  alluser: any = [];
  alluserData: any;
  store: any = []
  obj: any;
  idValue: any;
  val: any;
  
  constructor(private fb:FormBuilder,private api:DaoserviceService, private http:HttpClient,private router:Router) {
     this.fetchlocationdetails();
     
     this.addinfo=this.fb.group({
      FirstName:[this.addRecord.FirstName],
      LastName:[this.addRecord.LastName],
      Occupation:[this.addRecord.Occupation],
      NetWorth:[this.addRecord.NetWorth],
      Retirement:[this.addRecord.Retirement],
      Gender:[this.addRecord.Gender],
      locationInfo:[this.addRecord.locationInfo],
      PhoneNumber:[this.addRecord.PhoneNumber],
      Address:[this.addRecord.Address],
      Postal:[this.addRecord.Postal],
      checkbox:[this.addRecord.checkbox],
    });
    }
  
  ngOnInit(): void {
    //Validation Function//
    this.addinfo=this.fb.group(
      {
        FirstName: ['',Validators.required],
        LastName: ['',Validators.required],
        Occupation: ['',Validators.required],
        NetWorth: ['',Validators.required],
        Retirement: ['',Validators.required],
        Gender: ['',Validators.required],
        locationInfo: ['',Validators.required],
        PhoneNumber:['',Validators.required],
        Address: ['',Validators.required],
        Postal: ['',Validators.required],
        checkbox: ['',Validators.required],
      }
    );
    }
    //Getting indivdual fields //
  get FirstName() {
    return this.addRecord.get('FirstName')!;
  }
  get LastName() {
    return this.addRecord.get('LastName')!;
  }
  get Occupation() {
    return this.addRecord.get('Occupation')!;
  }
  get NetWorth() {
    return this.addRecord.get('NetWorth')!;
  }
  get Retirement() {
    return this.addRecord.get('Retirement')!;
  }
  get Gender() {
    return this.addRecord.get('Gender')!;
  }
  
  get locationInfo() {
    return this.addRecord.get('locationInfo')!;
  }
  get PhoneNumber() {
    return this.addRecord.get('PhoneNumber')!;
  }
  get Address() {
    return this.addRecord.get('Address')!;
  }
  get Postal() {
    return this.addRecord.get('Postal')!;
  }
  get checkbox() {
    return this.addRecord.get('checkbox')!;
  }
   get f(): {[key:string]:AbstractControl}{
    return this.addinfo.controls;
   }

  //Reset Function//
  // onReset():void {
  //   this.submitted=false;
  //   this.addinfo.reset();
  // }
  
  //Posting data to CouchDB//
onSubmit(Formvalue: any) {
  console.log("from form", Formvalue);
  this.api.storeData(Formvalue).subscribe((data) => {
    console.log("data returned from server", data);
    Formvalue.reset();
  })
  
}

//Fetching Location lookup for location input fields//
fetchlocationdetails(){

  this.api.fetchData("locationInfo").subscribe(res =>{
    console.log(res);
    let datas= res['rows'];
    console.log(datas)
    this.alluser = datas.map(item => item.doc);
   
  })
}
}

