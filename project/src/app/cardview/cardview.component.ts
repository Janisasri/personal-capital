import { Component, OnInit } from '@angular/core';
import { DaoserviceService } from '../daoservice.service';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {
  alluser: any = [];
  alluserData: any;
  store: any = []
  obj: any;
  idValue: any;
  val: any;
  userDataId:any
  constructor(private svc:DaoserviceService) { 
    this.fetchcardView();
  }
  
  fetchcardView(){
    this.svc.fetchData("cardInfo").subscribe(res =>{
      console.log(res);
      let data1=res['rows'];
      this.alluser = data1.map(item => item.doc)
      console.log(this.alluser);
    })
  }

  ngOnInit(): void {
    console.log("a");
  }

}
