import {Action, createReducer, on} from '@ngrx/store';
import * as BooksAction from '../actions/books.action';
import {Book} from '../../classes/book';


export const bookFeatureKey = 'books';


export interface BooksState {
  books: Book[];
}

export const initialState: BooksState = {
  books: []
};

export const newsReducer = createReducer(
  initialState,
  on(BooksAction.chargeBooks,(state: BooksState, {books}) => ({...state, books}))
);

export function reducerNews(state: BooksState | undefined, action: Action): any {
  return newsReducer(state, action);
}
