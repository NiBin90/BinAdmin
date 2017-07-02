import { CalendarComponent } from './pages/calendar/calendar.component';
import { GooglemapComponent } from './pages/map/googlemap/googlemap.component';
import { BaidumapComponent } from './pages/map/baidumap/baidumap.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { NewsComponent } from './pages/news/news.component';
import { SettingComponent } from './pages/setting/setting.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BasictrendComponent } from './pages/finance/basictrend/basictrend.component';
import { RealtimequoteComponent } from './pages/finance/realtimequote/realtimequote.component';

export const appRoutes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: 'calendar',
		component: CalendarComponent
	},
	{
		path: 'map',
		children: [
			{
				path: 'googlemap',
				component: GooglemapComponent
			},
			{
				path: 'baidumap',
				component: BaidumapComponent
			},
		]
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'finance',
		children: [
			{
				path: 'basictrend',
				component: BasictrendComponent
			},
			{
				path: 'realtimequeto',
				component: RealtimequoteComponent
			},
		]
	},
	{
		path: 'blog',
		component: BlogComponent
	},
	{
		path: 'news',
		component: NewsComponent
	},
	{
		path: 'setting',
		component: SettingComponent
	},
	{
		path: '**',
		component: DashboardComponent
	}

];
