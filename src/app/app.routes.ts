import { Routes } from '@angular/router';
import { Home } from './pages/Home/home.component';
import { Menu } from './pages/Menu/menu.component';
import { Error } from './pages/Error/error.component';
import { Ingredients } from './pages/Ingredients/Ingredients.component';
import { Menories } from './pages/Menories/menories.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: "home",
        component: Home
    },
    {
        path: 'memories',
        component: Menories
    },
    {
        path: 'menu',
        component: Menu,
    },
    {
        path: 'ingredients',
        component: Ingredients
    },
    {
        path: "**",
        component: Error
    }
];
