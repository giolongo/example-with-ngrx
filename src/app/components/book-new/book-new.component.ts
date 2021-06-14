import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Book} from '../../classes/book';
import {GenderEnum} from '../../enums/gender.enum';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookNewComponent implements OnChanges {

  @Input() book: Book;
  @Output() saveBook = new EventEmitter();
  public readonly GENDER = GenderEnum;

  constructor() {
  }

  ngOnChanges(): void {
    if(!this.book){
      this.book = new Book();
    }
  }

  saveBookFn(): void {
    this.saveBook.emit(this.book);
    this.book = new Book();
  }

}
