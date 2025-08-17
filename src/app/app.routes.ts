import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home';
import { CalendarComponent } from './pages/calendar/calendar';
import { CategoriesAccountsComponent } from './pages/categories-accounts/categories-accounts';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full'
    },
    {
        path: 'calendar',
        component: CalendarComponent,
        pathMatch: 'full'
    },
    {
        path: 'categories-accounts',
        component: CategoriesAccountsComponent,
        pathMatch: 'full'
    }
];
