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
      this.BookToPreviewData = this.api_repo.BookstoPreview 
      console.log(this.BookToPreviewData['authors'])
      this.PDF = this.BookToPreviewData['pdf']
      console.log(this.BookToPreviewData)
    }
 

  ngOnInit() {
  }

}
