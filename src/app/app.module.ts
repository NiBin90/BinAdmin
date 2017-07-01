import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MapComponent } from './pages/map/map.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { NewsComponent } from './pages/news/news.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { SettingComponent } from './pages/setting/setting.component';
import { GooglemapComponent } from './pages/map/googlemap/googlemap.component';
import { BaidumapComponent } from './pages/map/baidumap/baidumap.component';
import { TopmenuComponent } from './topmenu/topmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PagesComponent,
    DashboardComponent,
    MapComponent,
    FinanceComponent,
    NewsComponent,
    BlogComponent,
    SettingComponent,
    GooglemapComponent,
    BaidumapComponent,
    CalendarComponent,
    TopmenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
