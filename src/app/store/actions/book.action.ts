import {createAction, props} from '@ngrx/store';
import {Book} from '../../classes/book';

export const removeBook = createAction(
  '[Book] remove', props<{ id: number }>()
);

export const addBook = createAction(
  '[Book] add', props<{ book: Book }>()
);

export const modifyBook = createAction(
  '[Book] modify', props<{ book: Book }>()
);
