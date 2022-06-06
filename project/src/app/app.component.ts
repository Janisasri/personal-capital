
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  userData:{
    id:string;
  };
  userId:any;
 

  constructor( private router: Router) {
    this. userData = JSON.parse(localStorage.getItem('obj1'))
     if(this.userData == null){
       this.router.navigate(['/home']);
     }
     else if(this.userData != undefined &&  this.userData != null && this.userData['id']) {
    //  this.userId = this.userData.id
     this.router.navigate(['/login1']);
     }
    }
  }
