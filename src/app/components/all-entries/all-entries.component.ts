import { Component, OnInit } from '@angular/core';
import { ENTRIES } from '../../../data';
import { Entry } from '../../../models/entry';

@Component({
  selector: 'app-all-entries',
  templateUrl: './all-entries.component.html',
  styleUrls: ['./all-entries.component.scss']
})
export class AllEntriesComponent implements OnInit {
  entries: Entry[] = ENTRIES;

  constructor() { }

  ngOnInit(): void {
  }

  addEntry () {

  }
}
