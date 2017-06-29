import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { PagesComponent } from './pages/pages.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MapComponent } from './pages/map/map.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { NewsComponent } from './pages/news/news.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SettingComponent } from './pages/setting/setting.component';
import { GooglemapComponent } from './pages/map/googlemap/googlemap.component';
import { BaidumapComponent } from './pages/map/baidumap/baidumap.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PagesComponent,
    CalendarComponent,
    DashboardComponent,
    MapComponent,
    FinanceComponent,
    NewsComponent,
    BlogComponent,
    SettingComponent,
    GooglemapComponent,
    BaidumapComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBiqWYKD5m3D_87juK6ncm4fxcUew3mXQo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
