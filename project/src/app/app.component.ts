
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
    const userData:any =  localStorage.getItem('obj1');
     if(userData == 'undefined' || userData == null){
      console.log("heloo");
     }
     else if(userData != undefined &&  userData != null && userData['id']) {
     this.userData.id =  userData.id;
     this.router.navigate(['/login1']);
     }
    }
  }
