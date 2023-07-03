import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import BookModel from '../models/book.model'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }

  getBooks():Observable<BookModel[]> {
    return this.http.get<BookModel[]>('https://localhost:7299/api/Book');
  }


}
