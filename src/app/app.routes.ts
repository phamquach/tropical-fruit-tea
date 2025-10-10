
import { Routes } from '@angular/router';
import { Error } from './pages/Error/error.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: "home",
        loadComponent: () => import('./pages/Home/home.component').then(m => m.Home)
    },
    {
        path: 'memories',
        loadComponent: () => import('./pages/Memories/memories.component').then(m => m.Memories)

    },
    {
        path: 'menu',
        loadComponent: () => import('./pages/Menu/menu.component').then(m => m.Menu)
    },
    {
        path: 'ingredients',
        loadComponent: () => import('./pages/Ingredients/ingredients.component').then(m => m.Ingredients)
    },
    {
        path: "**",
        loadComponent: () => import('./pages/Error/error.component').then(m => m.Error)

    }
];
