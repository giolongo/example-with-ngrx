import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Book} from '../../classes/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnChanges {

  @Input() books: Book[];
  @Output() remove = new EventEmitter<number>()
  @Output() modify = new EventEmitter<Book>()
  @Output() refresh = new EventEmitter<void>()
  constructor() { }

  ngOnChanges(): void {
  }

}
