
import { Routes } from '@angular/router';
import { HomePage } from './views/home/home.page';
import { SearchPage } from '../search/views/search/search.page';

export const HOME_ROUTES: Routes = [
    {path:'home', component: HomePage},
    {path:'search', component: SearchPage}
];
    