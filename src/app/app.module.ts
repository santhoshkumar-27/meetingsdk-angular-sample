import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { AppComponent } from './app-new.component';
import { AppComponent } from './app.component';
import { VediosdkZoomComponent } from './vediosdk-zoom/vediosdk-zoom.component';
import { AppRoutingModule } from './app-routing.module';
import { MeetingsdkComponentsComponent } from './meetingsdk-components/meetingsdk-components.component';
import { MeetingsdkEmbededComponent } from './meetingsdk-embeded/meetingsdk-embeded.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    VediosdkZoomComponent,
    MeetingsdkComponentsComponent,
    MeetingsdkEmbededComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
