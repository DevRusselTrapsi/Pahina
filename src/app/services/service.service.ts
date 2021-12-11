import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private _url: string = 'http://localhost/Pahina/API/';


  constructor(private http: HttpClient) { }
    
  submit(data){
	  return this.http.post(this._url + '/login.php',data);
  }
  
}
