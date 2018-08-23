import { Injectable } from '@angular/core';
//import { HttpClient, HttpResponse} from '@angular/common/http';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { SERVER_API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {

  constructor(private http: Http) { }  
  
  read() {
    //const options = createRequestOption(req);
    return this.http.get("/api/getRoomType/")
        .pipe(map(res => res.json()));
  }    

}
