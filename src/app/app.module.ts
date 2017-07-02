import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';

import { ChartModule } from 'angular2-highcharts';

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
import { RealtimequoteComponent } from './pages/finance/realtimequote/realtimequote.component';
import { BasictrendComponent } from './pages/finance/basictrend/basictrend.component';
import { ContenttopComponent } from './pages/contenttop/contenttop.component';
declare var require: any;

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
    TopmenuComponent,
    RealtimequoteComponent,
    BasictrendComponent,
    ContenttopComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ChartModule.forRoot(require('highcharts'))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
