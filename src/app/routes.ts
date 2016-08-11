/**
 * Created by Martin on 11/08/16.
 */
import { RouterConfig } from '@angular/router'
import { Main } from './containers'

export const ROUTES: RouterConfig = [
    {
        path: '',
        component: Main,
        children: [
            {
                path: 'users',
                component: User
            },
            {
                path: 'users/:uuid',
                component: User
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
]