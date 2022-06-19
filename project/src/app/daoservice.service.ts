import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DaoserviceService {
  endpoint: string;
  temp: any;
  userDataId:any;
  userId:any;
  childId:any;
  id:any;

  pusharray: any = [];
  url = 'https://b4af4ef2-55e1-4a9b-9b02-8168e5964652-bluemix.cloudant.com/'
  dbUserName = 'apikey-v2-15a2mog1stn0kv0gjnidlq2eoth4psp58f8ov9zs42i6';
  dbPassword = 'aabcfd48d07fe38f4760f6cd11b83b4a';
  basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };
  dataBaseName = "personal-capital"
   constructor(private http: HttpClient) {
    let userData:any =  localStorage.getItem('obj1') || '{}';
  

    if(userData == 'undefined' || userData == null){
     console.log("a");
    }
    else if(userData != undefined &&  userData != null ) {
      userData = JSON.parse(userData)
    this.userDataId =  userData['_id'];
   
  }
   
  }
  
  //AdditionalInfo Component Type and UserID//
  storeData(formData: any) {
    console.log("From api", formData);
    let data ={
      "FirstName": formData['FirstName'],
      "LastName": formData['LastName'],
      "Occupation": formData['Occupation'],
      "NetWorth": formData['NetWorth'],
      "Retirement":formData['Retirement'] ,
      "Gender": formData['Gender'],
      "locationInfo": formData['locationInfo'],
      "PhoneNumber": formData['PhoneNumber'],
      "Address": formData['Address'],
      "Postal": formData['Postal'],
      "checkbox": formData['checkbox'],
      "type": "additionalInfo",
      "userInfo":this.userDataId,
  }
    return this.http.post<any>(this.url +'personal-capital',data,this.httpOptions)
  }
  
  //CardInfo Component Type and UserID//
  addData(formData: any) {
    console.log("From api", formData);
    let data1 ={
      "PayeeName": formData['PayeeName'],
      "AccountNumber": formData['AccountNumber'],
      "IFSCcode": formData['IFSCcode'],
      "AccountType": formData['AccountType'],
      "InvestingAmount": formData['InvestingAmount'],
      "PhoneNumber": formData['PhoneNumber'],
      "TypeYourOwn": formData['TypeYourOwn'],
      "type": "cardInfo",
      "userInfo":this.userDataId
      
  }
  return this.http.post<any>(this.url +'personal-capital',data1,this.httpOptions)
}


    


//InvestInfo Component Type and UserID//
  investAdd(formData: any) {
    console.log("From api", formData);
    let data2 ={
      "Plan": formData['Plan'],
      "type": "investInfo",
      "userInfo":this.userDataId
     
  }
  return this.http.post<any>(this.url +'personal-capital',data2,this.httpOptions)
}
childAdd(formData: any) {
  console.log("From api", formData);
  let data5 ={
    "child": formData['child'],
    "type": "childInfo",
    "userInfo":this.userDataId
   
}
return this.http.post<any>(this.url +'personal-capital',data5,this.httpOptions)
}

paymentAdd(formData: any) {
  console.log("From api", formData);
  let data3 ={
    "cardHolder": formData['cardHolder'],
    "year": formData['year'],
    "month":formData['month'],
    "cardNumber": formData['cardNumber'],
    "cvc": formData['cvc'],
    "type": "paymentInfo",
    "userInfo":this.userDataId
   
}
return this.http.post<any>(this.url +'personal-capital',data3,this.httpOptions)
}


//Location Lookup Type Setting//
LocationData(formData:any){
  console.log("From api",formData);
  let data4 ={
    "Location":formData['Location'],
    "type":"locationInfo"
    
      
  }
  return this.http.post<any>(this.url + 'personal-capital',data4,this.httpOptions)
}


 //Accessing all fetching data using type and userId//
fetchData(info:any){
  const url=this.url+'personal-capital/_design/sample1_docs/_view/addInfo?include_docs=true&keys=["'+ info+ this.userDataId + '"]';
  return this.http.get(url,this.httpOptions);
}
getRecordFromId(id){
  const url = this.url+'personal-capital/'+id
  return this.http.get(url,this.httpOptions)
}
getAllData(info:Array<string>){
  console.log(info)
  const url = `https://b4af4ef2-55e1-4a9b-9b02-8168e5964652-bluemix.cloudant.com/personal-capital/_all_docs?include_docs=true&keys=["`+info.join('","')+`"]`
 
  return this.http.get(url,this.httpOptions);
}
findApi(data){
  const url = `https://b4af4ef2-55e1-4a9b-9b02-8168e5964652-bluemix.cloudant.com/personal-capital/_find`
 
  return this.http.post(url,data,this.httpOptions);
}
emailValidation(query:any){
const url = `${this.url+this.dataBaseName}/_find`;
const selectorData = {
  selector:query
}
return this.http.post(url,selectorData,this.httpOptions)
}
}
 
