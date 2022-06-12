import { Component, OnInit } from '@angular/core';
import { DaoserviceService } from '../daoservice.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  alluser: any = [];
  alluserData: any;
  store: any = []
  obj: any;
  idValue: any;
  val: any;
       
  //Local storage get item for type setting//

 
  constructor(private svc:DaoserviceService) {
   
    this.fetchAdditionalDetails();
   }
  
  // lookupIdArray=[]
   //fetch the additional info for interpoliation concept//
   fetchAdditionalDetails(){
    
      this.svc.fetchData("additionalInfo").subscribe(res =>{
        console.log(res);
        let datas= res['rows'];
        console.log(datas)
        this.alluser =  datas.map(item => item.doc)
    })
    }
        
   ngOnInit(): void {
    console.log("Hello");
  }
 
  
}



