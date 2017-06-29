import { CalendarComponent } from './pages/calendar/calendar.component';
import { GooglemapComponent } from './pages/map/googlemap/googlemap.component';
import { BaidumapComponent} from './pages/map/baidumap/baidumap.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { NewsComponent } from './pages/news/news.component';
import { SettingComponent } from './pages/setting/setting.component';
import { BlogComponent } from './pages/blog/blog.component';

export const appRoutes = [
	{
		path: 'calendar',
		component: CalendarComponent
	},
	{
		path: 'map/googlemap',
		component: GooglemapComponent
	},
		{
		path: 'map/baidumap',
		component: BaidumapComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'finance',
		component: FinanceComponent
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
];
