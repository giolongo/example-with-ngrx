import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BookAdapterService} from '../adapter/book-adapter.service';
import {map} from 'rxjs/operators';
import {Book} from '../classes/book';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient, private bookAdapterService: BookAdapterService) {
  }


  get(): Observable<Book[]> {
    return this.http.get<Book[]>('./assets/books.json').pipe(map(books => {
        return books.map(book => this.bookAdapterService.decode(book));
      }
    ));
  }
}
