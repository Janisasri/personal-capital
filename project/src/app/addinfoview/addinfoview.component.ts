import { Component, OnInit } from '@angular/core';
import { DaoserviceService } from '../daoservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as lodash from 'lodash'

@Component({
  selector: 'app-addinfoview',
  templateUrl: './addinfoview.component.html',
  styleUrls: ['./addinfoview.component.css']
})
export class AddinfoviewComponent implements OnInit {
  alluser: any = [];
  alluserData: any;
  store: any = []
  obj: any;
  idValue: any;
  val: any;
  userDataId:any
  constructor(private svc:DaoserviceService,private router:Router,private toastr: ToastrService) {
  
    
    this.fetchAddView();
   }
   lookupIdArray=[]
   fetchAddView(){
     this.svc.fetchData("additionalInfo").subscribe(res =>{
       console.log(res);
       let data1=res['rows'];
       this.alluser = data1.map(item => item.doc)
       console.log(this.alluser);
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
   console.log("a");
  }

}
