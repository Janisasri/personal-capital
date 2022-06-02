import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DaoserviceService } from '../daoservice.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
   locationForm:FormGroup;
   //Array Format Object//
   locationRecord: any ={
      Location:'',
      Pincode:''
   };

   
  constructor( private fb:FormBuilder, private api:DaoserviceService,private http:HttpClient) {
    this.locationForm=this.fb.group({
      Location:[this.locationRecord.Location],
      Pincode:[this.locationRecord.Pincode]
    });
  }

  ngOnInit(): void {}
  get Location() {
    return this.locationRecord.get('Location')!;
  }
  get Pincode() {
    return this.locationRecord.get('Pincode')!;
  }
  get f(): {[key:string]:AbstractControl}{
    return this.locationForm.controls;
   }

   //Posting my data to CouchDB//
  Onsubmit(Formvalue:any):void{
    console.log("from form",Formvalue);
    this.api.LocationData(Formvalue).subscribe((data)=>{
      console.log("data returned from server",data);

    })
  }

}
