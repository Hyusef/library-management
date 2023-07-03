import { Component } from '@angular/core';
import BookModel from 'src/app/models/book.model';
import { BookEditorService } from 'src/app/services/sharedservices/BookEditor';

@Component({
  selector: 'app-book-edit-form',
  templateUrl: './book-edit-form.component.html',
  styleUrls: ['./book-edit-form.component.css'],
})
export class BookEditFormComponent {
  selectedBook: BookModel | undefined;
  
  constructor(private bookEditorService: BookEditorService) {
  }

  ngOnInit(): void {
    this.bookEditorService.currentBook.subscribe(book=>this.selectedBook=book)

  }
}
