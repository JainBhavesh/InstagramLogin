import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OauthCordova, Instagram } from 'ionic-cordova-oauth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private oauth: OauthCordova = new OauthCordova();
  private instagramProvider: Instagram = new Instagram({
    clientId: "",      // Register you client id from https://www.instagram.com/developer/
    redirectUri: 'http://localhost',  // Let is be localhost for Mobile Apps
    responseType: 'token',   // Use token only 
    appScope: ['basic', 'public_content']
  });

  constructor(public navCtrl: NavController) {

  }

  login() {
    this.oauth.logInVia(this.instagramProvider)
      .then((success) => {
        console.log("Instagram Login Success =>",success);
      }).catch((err) => {
        console.log("Error in oauth => ", err);
      });
  }
}
