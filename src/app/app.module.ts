import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BooksContainerComponent} from './components/books-container/books-container.component';
import {HttpClientModule} from '@angular/common/http';
import {BooksListComponent} from './components/books-list/books-list.component';
import {BookNewComponent} from './components/book-new/book-new.component';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers';
import {booksFeatureKey, booksReducer} from './store/reducers/books.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BooksContainerComponent,
    BooksListComponent,
    BookNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forFeature(booksFeatureKey, booksReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
