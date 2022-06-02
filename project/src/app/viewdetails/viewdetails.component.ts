import { Component, OnInit } from '@angular/core';
import { DaoserviceService } from '../daoservice.service';
import * as lodash from 'lodash'
@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
   
  //Object using to fetch the data//
  alluser: any = [];
  alluserData: any;
  store: any = []
  obj: any;
  idValue: any;
  val: any;
       
         //Local storage get item for type setting//
  public userData = JSON.parse(localStorage.getItem('obj1') || '{}')
  public userId = this.userData.id
 
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
        
        // datas.map(item => {
        //   console.log(item);
        //   if(item.doc?.['city_locationInfo']){
        //   this.lookupIdArray.push(item.doc?.['city_locationInfo'].toString())
        //   }
        //   this.alluser.push(item.doc);
        //   console.log(this.lookupIdArray)
        // });
        this.svc.getAllData(this.lookupIdArray).subscribe((res:any)=>{
          const lookupData = res.rows.map(el=>el.doc)
          this.alluser.forEach(element => {
            const location = lookupData.filter(el=>el['_id'] === element['locationInfo'])[0]
            element['Location'] = location['Location']
          });
          console.log(res)
        })
        },rej=>{
        alert("opps! No records on viewdata"+rej);
        console.log(rej)
      });
   } 
       //fetch the invest info for interpoliation concept//   
   fetchInvestDetails(){
    
    this.svc.fetchData("investInfo").subscribe(res =>{
      console.log(res);
      let datas= res['rows'];
      console.log(datas)
     this.alluser =  datas.map(item => item.doc);

      },rej=>{
      alert("opps! No records on viewdata"+rej);
      console.log(rej)
    });
 }

    
  ngOnInit(): void {

  }
 
  
}



