import {createAction, props} from '@ngrx/store';
import {Book} from '../../classes/book';

export const loadBooks = createAction(
  '[Books] load'
);

export const chargeBooks = createAction(
  '[Books] charge', props<{ books: Book[] }>()
);
