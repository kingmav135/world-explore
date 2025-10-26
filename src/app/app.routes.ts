import { Routes } from '@angular/router';

import { HOME_ROUTES } from './features/home/routes';
import { SEARCH_ROUTES } from './features/search/routes';
export const routes: Routes = [
    ...HOME_ROUTES,
    ...SEARCH_ROUTES,];
