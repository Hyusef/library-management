import { Injectable } from '@angular/core';
import BookModel from 'src/app/models/book.model';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class BookEditorService {
  private selectedBook = new BehaviorSubject<BookModel>({
    id:"",
    title:"",
    author:"",
    publishedDate:"",
    thumbnail:"",
  })

  currentBook = this.selectedBook.asObservable();
  book: BookModel | undefined;
  constructor() {}


  changeBook(book:BookModel){
    this.selectedBook.next(book);

  }
  

  getBookData(){
    return this.book;
  }
}
