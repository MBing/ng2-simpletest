/**
 * Created by Martin on 11/08/16.
 */
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent }    from './user-list.component';
import { UserDetailComponent }  from './user-detail.component';

const usersRoutes: Routes = [
    { path: 'users',  component: UserListComponent },
    { path: 'user/:uuid', component: UserDetailComponent }
];

export const usersRouting = RouterModule.forChild(usersRoutes);
