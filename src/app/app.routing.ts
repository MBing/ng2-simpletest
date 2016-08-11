/**
 * Created by Martin on 11/08/16.
 */
import { Routes, RouterModule }   from '@angular/router';


const userManagement: Routes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        children: [
            {
                path: ':id', component: './components/users/user-detail.component'
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

const appRoutes: Routes = [
    // ...loginRoutes,
    ...userManagement
];

export const appRoutingProviders: any[] = [
    // authProviders,
];

export const routing = RouterModule.forRoot(appRoutes);