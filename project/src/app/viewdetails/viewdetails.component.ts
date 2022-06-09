import { Component, OnInit } from '@angular/core';
import { DaoserviceService } from '../daoservice.service';
import * as lodash from 'lodash'
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
  
  lookupIdArray=[]
   //fetch the additional info for interpoliation concept//
   fetchAdditionalDetails(){
    
      this.svc.fetchData("additionalInfo").subscribe(res =>{
        console.log(res);
        let datas= res['rows'];
        console.log(datas)
        this.alluser =  datas.map(item => item.doc)
        this.lookupIdArray = lodash.uniq(this.alluser.map(item => item['locationInfo']))
        
       
        this.svc.getAllData(this.lookupIdArray).subscribe((ress:any)=>{
          const lookupData = ress.rows.map(el=>el.doc)
          this.alluser.forEach(element => {
            const location = lookupData.filter(el=>el['_id'] === element['locationInfo'])[0]
            element['Location'] = location['Location']
          });
          console.log(ress)
        })
        },rej=>{
        alert("opps! No records on viewdata"+rej);
        console.log(rej)
      });
   } 
        
   ngOnInit(): void {
    console.log("Hello");
  }
 
  
}



