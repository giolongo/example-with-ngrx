import {Person} from "./person";

export class Book {
  id: number;
  title: string;
  author: Person;
  pages: number;

  constructor() {
    this.id = null;
    this.title = null;
    this.author = null;
    this.pages = null;
    this.author = new Person();
  }
}
