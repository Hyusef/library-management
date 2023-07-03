import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { BooksComponent } from './components/Book/books/books.component';
import { BookEditFormComponent } from './components/BookEditor/book-edit-form/book-edit-form.component';
import { HeaderComponent } from './components/header/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookEditFormComponent,
    HeaderComponent,


  ],
  imports: [
    BrowserModule, HttpClientModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
