import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        title: 'Admin',
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    }
];
