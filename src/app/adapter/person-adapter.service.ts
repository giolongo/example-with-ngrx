import { Injectable } from '@angular/core';
import {Book} from "../classes/book";
import {Adapter} from "./adapter";
import {Person} from "../classes/person";

@Injectable({
  providedIn: 'root'
})
export class PersonAdapterService extends Adapter<Person>{

  constructor() { super()}

  decode(item: Person): Person {
    const person = new Person();
    person.name = item.name;
    person.surname = item.surname;
    person.gender = item.gender;
    return person;
  }
}
