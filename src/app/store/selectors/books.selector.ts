import * as fromBooks from '../reducers/books.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const booksState =
  createFeatureSelector<fromBooks.BooksState>(
    fromBooks.booksFeatureKey,
  );

export const getBooks = createSelector(booksState, (state: fromBooks.BooksState) => state.books)
