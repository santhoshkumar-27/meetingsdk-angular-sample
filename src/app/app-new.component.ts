import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

import ZoomMtgEmbedded from '@zoomus/websdk/embedded';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  authEndpoint = '';
  sdkKey = 'xUpJJ5SfmRPhrX2lnDOjwvalTFfKtk19sFto';
  meetingNumber = '123456789';
  passWord = '';
  role = 0;
  userName = 'Angular';
  userEmail = '';
  registrantToken = '';
  zakToken = '';
  leaveUrl = 'http://localhost:40079';

  client = ZoomMtgEmbedded.createClient();

  constructor(public httpClient: HttpClient, @Inject(DOCUMENT) document) {

  }

  ngOnInit(): void {
    const meetingSDKElement = document.getElementById('meetingSDKElement');

    this.client.init({
      debug: true,
      zoomAppRoot: meetingSDKElement,
      language: 'en-US',
      customize: {
        meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
        toolbar: {
          buttons: [
            {
              text: 'Custom Button',
              className: 'CustomButton',
              onClick: () => {
                console.log('custom button');
              }
            }
          ]
        }
      }
    });
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

  startMeeting(signature: any): void {

    this.client.join({
      signature,
      sdkKey: this.sdkKey,
      meetingNumber: this.meetingNumber,
      password: this.passWord,
      userName: this.userName,
      userEmail: this.userEmail,
      tk: this.registrantToken,
      zak: this.zakToken
    });
  }
}
