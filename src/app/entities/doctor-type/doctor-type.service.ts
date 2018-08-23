import { Injectable } from '@angular/core';
//import { HttpClient, HttpResponse} from '@angular/common/http';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { SERVER_API_URL, SERVER_API_BASE_URL } from '../../app.constants';
import { createRequestOption } from '../../shared/model/request-util';

@Injectable({
  providedIn: 'root'
})
export class DoctorTypeService {

  constructor(private http: Http) { }

  read() {
    return this.http.get(SERVER_API_BASE_URL + "/doctor/read/")
        .pipe(map(res => res.json()));
  }

  delete(prmDocTypeId) {
    return this.http.delete(SERVER_API_BASE_URL + '/doctor/delete/' + prmDocTypeId)
      .pipe(map(response => response.json()));
  }

}
