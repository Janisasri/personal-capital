import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DaoserviceService } from '../daoservice.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  alluser: any = [];
  alluserData: any;
  store: any = []
  obj: any;
  idValue: any;
  val: any;
  res:any;
  constructor(private router:Router,private api:DaoserviceService, private toastr: ToastrService){

  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
   }
   invest() {
    this.api.fetchData("additionalInfo").subscribe(res =>{
      this.val=res;
      console.log(this.val);
      console.log(this.val.rows.length);
      if(this.val.rows.length < 1){
       this.router.navigate(['/invest'])
      }
      else{
        this.toastr.warning("Fill Additional Detail Form");
      }
    });
  }
  bank() {
    this.api.fetchData("investInfo").subscribe(res =>{
      this.val=res;
      console.log(this.val);
      console.log(this.val.rows.length);
      if(this.val.rows.length < 1){
       this.router.navigate(['/card'])
      }
      else{
        this.toastr.warning("Fill Invest Plan Form");
      }
    });
  }

}
 

