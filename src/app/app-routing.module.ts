import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { VediosdkZoomComponent } from './vediosdk-zoom/vediosdk-zoom.component';
import { MeetingsdkComponentsComponent } from './meetingsdk-components/meetingsdk-components.component';
import { MeetingsdkEmbededComponent } from './meetingsdk-embeded/meetingsdk-embeded.component';


const routes: Routes = [
  {
    path: 'vediosdk',
    component: VediosdkZoomComponent,
  },
  {
    path: 'meetingsdk-componentview',
    component: MeetingsdkComponentsComponent,
  }, {
    path: 'meetingsdk-embeded',
    component: MeetingsdkEmbededComponent,
  },
  {
    path: '',
    redirectTo: 'meetingsdk-embeded',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
