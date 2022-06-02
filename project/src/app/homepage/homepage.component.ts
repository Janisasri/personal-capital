import { Component, OnInit } from '@angular/core';
import { nodeservice } from '../nodeservice.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { DaoserviceService } from '../daoservice.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
   loginform:FormGroup;
   loginrecord: any = {
    emailId: '',
    Password: '',
    };

    //For Local Storage SetItem (Obj1)//
    obj1: any = {
      Username:'',
      Password:'',
      Confirmpassword:'',
      emailId:'',
      fullName:'',
      _id:'',
      
    };
    
    
  constructor(private fb:FormBuilder,private api:nodeservice,private router:Router,private Daoservice:DaoserviceService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginform =  this.fb.group({
     
        emailId: [''],
        Password: ['', [ Validators.minLength(8)]],
  });
  }
 
  get emailId(){
    return this.loginform.get('emailId')!;
  } 
  get Password() {
    return this.loginform.get('Password')!;
  }
  login(Formvalue:any)
   {
     const selector = {
       selector:{
      emailId:Formvalue.emailId,
      Password:Formvalue.Password
     }}
     this.Daoservice.login(selector).subscribe((response:any)=>{
       console.log(response)
       if(response.docs.length<=0){
      this.toastr.warning('invalid credentials','login failed')
      return;
       }
       
       let data = response['docs'][0]
       localStorage.setItem('loggedInUser',data)
       
       this.toastr.success('login succesfull')
     
     },err=>{
      this.toastr.error('login failed')
      alert('sample')
       console.log(err)
     })
     this.router.navigate(['/dashboard'])
     
   console.log(Formvalue.emailId);
  
     console.log(data["docs"][0])
   console.log("data returned from server",data["docs"][0].emailId);
   console.log("data returned from server",data["docs"][0].Password);

  
   //Declaring our Fields in Array Format for Local Storage Purpose//
  let datas =  {
    Confirmpassword: data["docs"][0].Confirmpassword,
    Password: data["docs"][0].Password,
    Username: data["docs"][0].Username,
    emailId: data["docs"][0].emailId,
    fullName: data["docs"][0].fullName,
    id:data["docs"][0]._id
    
   }
   localStorage.setItem('obj1', JSON.stringify(datas));


 //GetItem from Local Storage  Obj1 //
 let userData = JSON.parse(localStorage.getItem('obj1'))
 console.log("obj1 object:", userData);
  console.log("object id:",userData.id);

}
}