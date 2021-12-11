import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'; 
import { BooksService } from '../../services/books.service'; 
import { RepositoryService } from '../../services/repository.service';  

@Component({
  selector: 'app-books-preview',
  templateUrl: './books-preview.page.html',
  styleUrls: ['./books-preview.page.scss'],
})
export class BooksPreviewPage implements OnInit {

  BookToPreviewData = []
  PDF = []

  constructor(private router: Router,  
    private api_login: BooksService,
    private api_repo: RepositoryService) {
     this.view(api_repo.BookstoPreview['isbn13']); 
    }
  
   view(isbn){
    this.api_login.previewBook(isbn).subscribe((result:any) =>{   
      this.BookToPreviewData = result 
      console.log(this.BookToPreviewData)
      this.PDF = result['pdf']
    },(error) => { 
      console.error(error);
    })   

  }
  
 

  ngOnInit() {
  }

}
