import * as BooksAction from '../actions/books.action';
import * as BookAction from '../actions/book.action';
import {Book} from '../../classes/book';
import {Action, createReducer, on} from '@ngrx/store';
import _ from 'lodash';


export const booksFeatureKey = 'books';


export interface BooksState {
  books: Book[];
}

export const initialState: BooksState = {
  books: []
};

export const booksReducer = createReducer(
  initialState,
  on(BooksAction.chargeBooks, (state: BooksState, {books: books}) => ({...state, books})),
  on(BookAction.removeBook, (state: BooksState, {id}) => {
    return {...state, books: state.books.filter(book => book.id !== id)};
  }),
  on(BookAction.addBook, (state: BooksState, {book}) => {
    return {...state, books: [...state.books, book]};
  }),
  on(BookAction.modifyBook, (state: BooksState, {book}) => {
    const books = _.cloneDeep(state.books);
    const index = books.findIndex(bookStored => bookStored.id === book.id);
    if (index !== -1) {
      books[index] = book;
    }
    return {...state, books};
  })
);

export function reducerNews(state: BooksState | undefined, action: Action): any {
  return booksReducer(state, action);
}
