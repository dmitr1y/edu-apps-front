import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {EduAppsComponent} from "./edu-apps/edu-apps.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'apps',
    component: EduAppsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
