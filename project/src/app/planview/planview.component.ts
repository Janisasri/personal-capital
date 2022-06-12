import { Component, OnInit } from '@angular/core';
import { DaoserviceService } from '../daoservice.service';

@Component({
  selector: 'app-planview',
  templateUrl: './planview.component.html',
  styleUrls: ['./planview.component.css']
})
export class PlanviewComponent implements OnInit {
  alluser: any = [];
  alluserData: any;
  store: any = []
  obj: any;
  idValue: any;
  val: any;
  userDataId:any
  constructor(private svc:DaoserviceService) { 
    this.fetchplanView();
  }
  fetchplanView(){
    this.svc.fetchData("investInfo").subscribe(res =>{
      console.log(res);
      let data3=res['rows'];
      this.alluser = data3.map(item => item.doc)
      console.log(this.alluser);
    })
  }

  ngOnInit(): void {
    console.log("a");  }

}
