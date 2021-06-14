import { Injectable } from '@angular/core';
import {Book} from "../classes/book";
import {Adapter} from "./adapter";
import {PersonAdapterService} from "./person-adapter.service";

@Injectable({
  providedIn: 'root'
})
export class BookAdapterService extends Adapter<Book>{

  constructor(private personAdapterService: PersonAdapterService) { super()}

  decode(item: Book): Book {
    const book = new Book();
    book.id = item.id;
    book.title = item.title;
    book.pages = item.pages;
    book.author = this.personAdapterService.decode(item.author);
    return book;
  }
}
