import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AppointmentPage } from '../appointment/appointment';
import { CalendarPage } from '../calendar/calendar';
import { ProfilePage } from '../profile/profile';
import { RegistryPage } from '../registry/registry';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  profileRoot = ProfilePage;
  appointmentRoot = AppointmentPage;
  searchRoot = SearchPage;
  registryRoot = RegistryPage;
  calendarRoot = CalendarPage;


  constructor() {}

}
