import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
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
                this.toastr.error(err.error.reason);
                
            })
            
        )
    }
    


}