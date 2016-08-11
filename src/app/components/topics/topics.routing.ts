/**
 * Created by Martin on 11/08/16.
 */
import { Routes, RouterModule } from '@angular/router';
import { TopicListComponent, TopicDetailComponent }    from './';

const topicsRoutes: Routes = [
    { path: 'topics',  component: TopicListComponent },
    { path: 'topics/:uuid', component: TopicDetailComponent }
];

export const topicsRouting = RouterModule.forChild(topicsRoutes);
