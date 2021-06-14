import {GenderEnum} from "../enums/gender.enum";

export class Person {
  name: string;
  surname: string;
  gender: GenderEnum;

  constructor() {
    this.name = null;
    this.surname = null;
    this.gender = null;
  }

  get name_with_prefix() : string {
    return [GenderEnum.F === this.gender ? 'Mrs.' : 'Mr.', this.surname, this.name].join(' ');
  }
}
