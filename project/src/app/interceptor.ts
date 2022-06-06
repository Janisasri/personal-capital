import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class HttpCallInterceptor implements HttpInterceptor {
    constructor(private injector: Injector,private toastr: ToastrService ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted request' + request.url);
        return next.handle(request).pipe(
            tap(evt => {
                console.log(evt)
            }, err => {
                console.log(err)
                if(err.error.reason) {
                    this.toastr.error(err.error.reason)
                }
                else if(err.error.message) {
                      this.toastr.error(err.error.error.reason);
                }
                else {
                    this.toastr.error(err.error.message);
                }
                
                
            })
            
        )
    }
    


}