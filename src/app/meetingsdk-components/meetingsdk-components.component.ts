import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import ZoomMtgEmbedded from '@zoomus/websdk/embedded';
import { ZoomService } from '../shared/service/zoom.service';

@Component({
  selector: 'app-meetingsdk-components',
  templateUrl: './meetingsdk-components.component.html',
  styleUrls: ['./meetingsdk-components.component.css']
})
export class MeetingsdkComponentsComponent implements OnInit {


  client = ZoomMtgEmbedded.createClient();

  constructor(
    public httpClient: HttpClient,
    @Inject(DOCUMENT) document,
    private zs: ZoomService, ) {


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
      sdkKey: this.zs.sdkKey,
      meetingNumber: this.zs.meetingNumber,
      password: this.zs.passWord,
      userName: this.zs.userName,
      userEmail: this.zs.userEmail,
      tk: this.zs.registrantToken,
      zak: this.zs.zakToken
    });
  }
}
