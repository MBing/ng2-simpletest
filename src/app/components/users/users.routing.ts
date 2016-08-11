/**
 * Created by Martin on 11/08/16.
 */
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent, UserDetailComponent } from './';
import { TopicListComponent }  from '../topics';

const usersRoutes: Routes = [
    {
        path: 'users',
        component: UserListComponent,
        children: [
            { path: ':uuid', component: TopicListComponent },
            { path: '', component: UserDetailComponent }
        ]
    },

];

export const usersRouting = RouterModule.forChild(usersRoutes);
