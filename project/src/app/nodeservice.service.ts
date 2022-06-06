import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
 providedIn: 'root'
})
export class nodeservice {
  public userData = JSON.parse(localStorage.getItem('obj1') || '{}')
  public userId = this.userData.id

 constructor(private http: HttpClient) {}
    storedata(FormData :any) {
      return this.http.post<any>('http://localhost:8000/postdata/', FormData);
    }
    test_get(id:any)
  {
    return this.http.get<any>('http://localhost:8000/getdata/'+id);
}
  }
 