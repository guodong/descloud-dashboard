import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Desktop} from "./desktop";

@Injectable()
export class ApiService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: Http) {
  }

  getUserInfo(): Observable<any> {
    let headers = new Headers({ 'Authorization': 'bearer ' + localStorage.getItem('token') });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.apiUrl + '/user', options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getToken(code: string): Observable<any> {
    return this.http.get(this.apiUrl + '/token?code='+code)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDesktops(): Observable<Desktop[]> {
    let headers = new Headers({ 'Authorization': 'bearer ' + localStorage.getItem('token') });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.apiUrl + '/desktops', options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createDesktop(desktop: Desktop): Observable<any> {
    let headers = new Headers({ 'Authorization': 'bearer ' + localStorage.getItem('token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiUrl + '/desktops', desktop, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  
  removeDesktop(desktop: Desktop): Observable<any> {
    let headers = new Headers({ 'Authorization': 'bearer ' + localStorage.getItem('token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(this.apiUrl + '/desktops/' + desktop._id, options)
      .map(this.extractData)
      .catch(this.handleError);
    
  }
  
  getDesktopInfo(id: string): Observable<any> {
    let headers = new Headers({ 'Authorization': 'bearer ' + localStorage.getItem('token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.apiUrl + '/desktops/' + id, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  
  getStatsInfo(desktop: Desktop): Observable<any> {
    let headers = new Headers({ 'Authorization': 'bearer ' + localStorage.getItem('token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.apiUrl + '/desktops/stats/' + desktop._id, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
