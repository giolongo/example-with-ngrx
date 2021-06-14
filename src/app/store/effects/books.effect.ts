import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {RestService} from '../../services/rest.service';
import * as BooksAction from '../actions/books.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Injectable()
export class BooksEffect {
  constructor(private actions$: Actions,
              private restService: RestService) {
  }

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksAction.loadBooks),
      switchMap(() => {
        return this.restService.get().pipe(
          map(books => {
            return BooksAction.chargeBooks({books});
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );
}
