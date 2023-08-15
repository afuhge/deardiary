import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AllEntriesComponent } from './components/all-entries/all-entries.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { HeaderModule } from './parts/header/header.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faChartPie,
  faChevronLeft,
  faChevronRight, faEllipsis, faEllipsisV,
  faFileLines,
  faGear, faLock, faPlus,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntryModule } from './parts/entry/entry.module';
import { AllEntriesModule } from './components/all-entries/all-entries.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'diary',
      },
      {
        path: 'diary',
        component: AllEntriesComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
      }
    ]),
    HeaderModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AllEntriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(faEllipsisV, faChevronRight, faChevronLeft, faSearch, faChartPie, faGear, faFileLines, faLock, faPlus);
  }
}
