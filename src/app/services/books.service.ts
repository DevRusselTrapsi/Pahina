import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  API = "https://api.itbook.store"
  constructor(private http: HttpClient) { }
  
  Library(){  
    return this.http.get(this.API+'/1.0/new'); 
  }

  previewBook(isbn){
    return this.http.get(this.API+'/1.0/books/'+isbn); 
  }
}
