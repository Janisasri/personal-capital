import { Component, OnInit } from '@angular/core';

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
      
    
  });
}

  ngOnInit(): void {
    console.log('a');
  }

}

