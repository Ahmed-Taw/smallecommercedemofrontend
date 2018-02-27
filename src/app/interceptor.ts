import { Headeroptions } from './shared/helpers/Constants';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpSentEvent,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpResponse,
    HttpUserEvent,
    HttpEvent,
    HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {

    private readonly baseUrl: string = environment.apiUrl;
    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent |
    HttpHeaderResponse|
    HttpProgressEvent |
    HttpResponse<any> |
    HttpUserEvent<any>> {
        let changedrequest = req.clone({url: this.baseUrl + 'api' + req.url});
        if(req.method.toLowerCase() == 'post' || req.method.toLowerCase() == 'put'){
         changedrequest = changedrequest 
                     .clone({headers: req.headers.set('Content-Type',  'application/json')});
        }
        return next.handle(changedrequest)
        .map((response:HttpEvent<any>)=>{
            return response;
        });
    }
}
