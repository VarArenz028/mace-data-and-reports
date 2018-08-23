import { Injectable } from '@angular/core';
//import { HttpClient, HttpResponse} from '@angular/common/http';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { SERVER_API_URL } from '../../app.constants';
import { createRequestOption } from '../../shared/model/request-util';

@Injectable({
  providedIn: 'root'
})
export class AdmissionTypeService {

  constructor(private http: Http) { }  

  /*
  //jhipster example
  query(req?: any): Observable<HttpResponse<Car[]>> {
    const options = createRequestOption(req);
    return this.http.get<Car[]>(this.resourceUrl, { params: options, observe: 'response' })
        .map((res: HttpResponse<Car[]>) => this.convertArrayResponse(res));
  }

  //egmis example
  Read(prmUsername: string, prmOwnerCode: string, prmOwnerType: string, prmToken: string): Observable<Array<any>> {            
    let headers = new Headers();        
    headers.append('Accept', 'application/json;charset=UTF-8');        
    headers.append('authorization', `Bearer ${prmToken}`); 

    let options = new RequestOptions({headers: headers});       
    return this.http.get(AppSettings.API_BASEURL +  '/displayNoscaNo/?userId=' + prmUsername + '&ownerCode=' + prmOwnerCode + '&ownerType=' + prmOwnerType,     
      options)
    .map(response => response.json())  
  }  

  */   
  read() {
    //const options = createRequestOption(req);
    return this.http.get("/listing/getCities/")
        .pipe(map(res => res.json()));
  }    

}
