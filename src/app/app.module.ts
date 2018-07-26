import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from "@angular/common/http";
import { MomentModule } from 'angular2-moment';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Modulo custom
//import { MessagesModule } from '../messages/messages.module';

// Calendario
import { NgCalendarModule } from 'ionic2-calendar';

// Pages
import { MyApp } from './app.component';
import { BasicPage } from '../pages/basic/basic';
import { HomePage } from '../pages/home/home';
import { AppointmentPage } from '../pages/appointment/appointment';
import { CalendarPage } from '../pages/calendar/calendar';
import { EditUserPage } from '../pages/edit-user/edit-user';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { SearchPage } from '../pages/search/search';
import { RegisterPage } from '../pages/register/register';
import { RegistryPage } from '../pages/registry/registry';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    BasicPage,
    HomePage,
    AppointmentPage,
    CalendarPage,
    EditUserPage,
    ProfilePage,
    LoginPage,
    SearchPage,
    RegisterPage,
    RegistryPage,
    TabsPage
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpClientModule,
    MomentModule
    //MessagesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BasicPage,
    HomePage,
    AppointmentPage,
    CalendarPage,
    EditUserPage,
    LoginPage,
    ProfilePage,
    SearchPage,
    RegisterPage,
    RegistryPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
