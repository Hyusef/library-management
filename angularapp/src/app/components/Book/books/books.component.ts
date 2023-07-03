import { Component,ChangeDetectorRef } from '@angular/core';
import BookModel from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book-service';
import { BookEditorService } from 'src/app/services/sharedservices/BookEditor';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  Books: BookModel[] = [];
  constructor(
    private bookService: BookService,
    private bookEditorService: BookEditorService,
  ) {}

  getClicked(book: BookModel) {
    console.log(book);
    this.bookEditorService.changeBook(book);
  }


  ngOnInit(): void {
    
    this.bookService.getBooks().subscribe({
      next: (books) => {
        this.Books = books;
      },
    });
  }
}

