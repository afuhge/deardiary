import { Entry } from './models/entry';

const entry1: Entry = new Entry('2022-04-09T18:38:29.858Z', 1, 'Heute war mies');
const entry2: Entry = new Entry('2022-04-10T18:38:29.858Z', 3, 'Heute war ok');
const entry3: Entry = new Entry('2022-04-01T18:38:29.858Z', 5, 'Heute war es richtig toll');

export const ENTRIES = [
  entry1,
  entry2,
  entry3,
  entry1,
  entry2,
  entry3,
  entry1,
  entry2,
  entry3
]
