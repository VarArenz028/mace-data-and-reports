import { Injectable } from '@angular/core';
//import { HttpClient, HttpResponse} from '@angular/common/http';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { map } from "rxjs/operators";

import { SERVER_API_URL, SERVER_API_BASE_URL } from '../../app.constants';
import { createRequestOption } from '../../shared/model/request-util';
import { Procedure } from '../../shared/model/procedure';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  constructor(private http: Http) { }  
  
  create(prmData: Procedure) {            
    let headers = new Headers();        
    headers.append('Content-Type', 'application/json;');        
    headers.append('Accept', 'application/json;');        

    let options = new RequestOptions({headers: headers});  
    return this.http.post(SERVER_API_BASE_URL + '/procedure/create',  
      "[" + JSON.stringify(prmData) + "]",
      options)
      .pipe(map(response => response.json()))
  } 

  read() {    
    return this.http.get(SERVER_API_BASE_URL + "/procedure/read/")
        .pipe(map(res => res.json()));
  }     

  readActive() {    
    return this.http.get(SERVER_API_BASE_URL + "/procedure/read/active")
        .pipe(map(res => res.json()));
  }     

  readInactive() {    
    return this.http.get(SERVER_API_BASE_URL + "/procedure/read/inactive")
        .pipe(map(res => res.json()));
  }    
  
  readPermanent() {    
    return this.http.get(SERVER_API_BASE_URL + "/procedure/read/permanent")
        .pipe(map(res => res.json()));
  }     

  readTemporary() {    
    return this.http.get(SERVER_API_BASE_URL + "/procedure/read/temporary")
        .pipe(map(res => res.json()));
  }     
  

  update(prmData: Procedure) {            
    let headers = new Headers();        
    headers.append('Content-Type', 'application/json;');        
    headers.append('Accept', 'application/json;');            

    let options = new RequestOptions({headers: headers});       
    return this.http.put(SERVER_API_BASE_URL + '/procedure/update/',
      JSON.stringify(prmData),
      options)
      .pipe(map(response => response.json()));
  } 

  delete(prmProcedureId) {
    return this.http.delete(SERVER_API_BASE_URL + '/procedure/delete/' + prmProcedureId)
      .pipe(map(response => response.json()));
  }
}
