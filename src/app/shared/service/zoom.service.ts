import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZoomService {
  authEndpoint = '';
  sdkKey = 'xUpJJ5SfmRPhrX2lnDOjwvalTFfKtk19sFto';
  meetingNumber = '123456789';
  passWord = '';
  role = 0;
  userName = 'Angular';
  userEmail = '';
  registrantToken = '';
  zakToken = '';
  leaveUrl =  window.location.href;
  constructor() { }
}
