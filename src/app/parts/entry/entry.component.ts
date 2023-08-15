import { Component, Input, OnInit } from '@angular/core';
import { Entry } from '../../../models/entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  @Input()
  public entry: Entry | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  // todo: pipe to map rating to text
  // todo: map rating to icon
  // todo: map rating to color

}
