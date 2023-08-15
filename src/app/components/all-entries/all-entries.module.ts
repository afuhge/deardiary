import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllEntriesComponent } from './all-entries.component';
import { EntryModule } from '../../parts/entry/entry.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AllEntriesComponent,
  ],
  imports: [
    CommonModule,
    EntryModule,
    FontAwesomeModule,
  ],
  exports: [
    AllEntriesComponent,
  ]
})
export class AllEntriesModule { }
