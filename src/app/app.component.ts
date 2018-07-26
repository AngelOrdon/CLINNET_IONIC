import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Importacion de pages
import { TabsPage } from '../pages/tabs/tabs';
import { BasicPage } from '../pages/basic/basic';

//Importacion para Identity
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: 'app.html',
  providers: [UserService]
})
export class MyApp {

  //Para llamar a las pages
  rootPage:any;
  public user:User;
  public status:string;
  public identity;
  public token;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private _userService: UserService
  ) {
    this.user = new User("","","","","","","","");
    //llama el servicio getIdentity
    this.identity = this._userService.getIdentity();

    //Si no esta logueado lo manda a BasicPage, si esta logueado lo manda a TabsPage
    if (!this.identity || !this.identity._id){
      this.status = 'error';
      this.rootPage = BasicPage;
    }else{
      this.rootPage = TabsPage;
    }
    
    //this.rootPage = BasicPage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


}

