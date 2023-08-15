export class Entry {
  public date: string = '';
  public rating: number = 0;
  public description: string = '';

  constructor (date: string, rating: number, description: string) {
    this.date = date;
    this.rating = rating;
    this.description = description;
  }


}
