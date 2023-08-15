import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    EntryComponent,
  ]
})
export class EntryModule { }
