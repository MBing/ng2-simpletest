/**
 * Created by Martin on 11/08/16.
 */
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent }    from './topic-list.component';
import { TopicDetailComponent }  from './topic-detail.component';

const usersRoutes: Routes = [
    { path: 'topics',  component: UserListComponent },
    { path: 'user/:uuid', component: TopicDetailComponent }
];

export const usersRouting = RouterModule.forChild(usersRoutes);
