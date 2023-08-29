import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

import { ZoomMtg } from '@zoomus/websdk';
import { ZoomService } from '../shared/service/zoom.service';

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.15.2/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');

@Component({
  selector: 'app-meetingsdk-embeded',
  templateUrl: './meetingsdk-embeded.component.html',
  styleUrls: ['./meetingsdk-embeded.component.css']
})
export class MeetingsdkEmbededComponent implements OnInit {


  constructor(
    public httpClient: HttpClient,
    @Inject(DOCUMENT) document,
    private zs: ZoomService, ) {

  }

  ngOnInit(): void {

  }

  getSignature(): void {
    // this.httpClient.post(this.authEndpoint, {
    //   meetingNumber: this.meetingNumber,
    //   role: this.role
    // }).toPromise().then((data: any) => {
    //   if(data.signature) {
    //     console.log(data.signature)
    //     this.startMeeting(data.signature)
    //   } else {
    //     console.log(data)
    //   }
    // }).catch((error) => {
    //   console.log(error)
    // })
    const jwt = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IjZhdGtuY2JHU2VtMXpnUWZtU0dZblEiLCJleHAiOjE2OTMyMDU2MzEsImlhdCI6MTY5MzIwMDIzMX0.JszYlWKUdpwPRTvmmWDW7dJ8k0S9r792P85fGww67Dc`;
    this.startMeeting(jwt);
  }

  // tslint:disable-next-line:typedef
  startMeeting(signature) {

    document.getElementById('zmmtg-root').style.display = 'block';

    ZoomMtg.init({
      leaveUrl: this.zs.leaveUrl,
      success: (success) => {
        console.log(success);
        ZoomMtg.join({
          signature,
          sdkKey: this.zs.sdkKey,
          meetingNumber: this.zs.meetingNumber,
          passWord: this.zs.passWord,
          userName: this.zs.userName,
          userEmail: this.zs.userEmail,
          tk: this.zs.registrantToken,
          zak: this.zs.zakToken,
          // tslint:disable-next-line:no-shadowed-variable
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.log(error);
          }
        });
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
