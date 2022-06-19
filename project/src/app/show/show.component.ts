import { Component, OnInit } from '@angular/core';
import * as lodash from 'lodash'
import { DaoserviceService } from '../daoservice.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  alluser: any = [];
  alluserData: any;
  store: any = []
  obj: any;
  idValue: any;
  val: any;
  userDataId:any
  constructor(private svc:DaoserviceService) { 
    this.fetchchildView();
  }
  lookupIdArray=[]
  fetchchildView(){
    this.svc.fetchData("paymentInfo").subscribe(res =>{
      console.log(res);
      let data1=res['rows'];
      this.alluser = data1.map(item => item.doc)
      console.log(this.alluser);
      this.lookupIdArray=lodash.uniq(this.alluser.map(item => item['childInfo']))
      this.svc.getAllData(this.lookupIdArray).subscribe((ress:any)=>{
        const lookupData = ress.rows.map(el=>el.doc)
        this.alluser.forEach(element => {
          const Child = lookupData.filter(el=>el['_id'] === element['childInfo'])[0]
          element['child']=Child['child']
        });
        console.log(ress)
      })
    },rej => {
      alert("oops! No record"+rej);
      console.log(rej);
    });
  }

  ngOnInit(): void {
    console.log('a');
  }

}
