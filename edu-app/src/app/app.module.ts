import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AboutComponent } from './about/about.component';
import { EduAppsComponent } from './edu-apps/edu-apps.component';
import { AppsListComponent } from './edu-apps/apps-list/apps-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EduAppsComponent,
    AppsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
