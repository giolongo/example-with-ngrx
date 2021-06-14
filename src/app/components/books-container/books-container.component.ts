import {Component, OnInit} from '@angular/core';
import {Book} from '../../classes/book';
import _ from 'lodash';
import {AppState} from '../../reducers';
import {Store} from '@ngrx/store';
import {getBooks} from '../../store/selectors/books.selector';
import {loadBooks} from '../../store/actions/books.action';
import {addBook, modifyBook, removeBook} from '../../store/actions/book.action';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss']
})
export class BooksContainerComponent implements OnInit {

  public books$ = this.store.select(getBooks);
  public bookSelected: Book;

  constructor(private store: Store<AppState>) {
    this.getBooks();
  }

  ngOnInit(): void {
  }

  public remove(id: number): void {
    this.store.dispatch(removeBook({id}));
  }

  public getBooks(): void {
    this.store.dispatch(loadBooks());
  }

  public saveBook(book: Book): void {
    if (book.id) {
      this.store.dispatch(modifyBook({book}));
    } else {
      this.store.dispatch(addBook({book}));
    }
  }

  public selectBook(book: Book): void {
    this.bookSelected = _.cloneDeep(book);
  }

}
