export class Adapter<T> {
  decode(item: T): T {
    return item;
  }
  encode(item: T): T {
    return item;
  }
}
