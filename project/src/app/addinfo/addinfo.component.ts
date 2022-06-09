import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,AbstractControl, FormBuilder} from '@angular/forms';
import { DaoserviceService } from '../daoservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


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
    
    checkbox:'',
    };

    //Objects Using to fetch//
  alluser: any = [];
  alluserData: any;
  store: any = []
  obj: any;
  idValue: any;
  val: any;
  res:any
  
  constructor(private fb:FormBuilder,private api:DaoserviceService, private http:HttpClient,private router:Router,private toastr: ToastrService) {
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

 
  
  //Posting data to CouchDB//
onSubmit(Formvalue: any) {
  this.api.fetchData("additionalInfo").subscribe(res =>{
    this.val=res;
    console.log(this.val);
    console.log(this.val.rows.length);
    if(this.val.rows.length < 1){
      this.router.navigate(['/addinfo'], )

  console.log("from form", Formvalue);
  this.api.storeData(Formvalue).subscribe((data) => {

   
    console.log("data returned from server", data);
    this.toastr.success("Form Submitted Succesfully,Click Next button");
  
    this.addinfo.reset();
  },
  err=>{
    this.toastr.error("Form Failed to Submitted",err);
  });
}
else{
  this.toastr.warning("Data Exists");
}
});
 }


//Fetching Location lookup for location input fields//
fetchlocationdetails(){
  const query = {
    "selector": {
       "type": "locationInfo"
    }
 }
this.api.findApi(query).subscribe(res =>{
    console.log(res);
    let datas= this.alluser =  res['docs'];
    console.log(datas)

    
   
  })
}
}

