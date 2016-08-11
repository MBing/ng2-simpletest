/**
 * Created by Martin on 11/08/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { UserListComponent }    from './topic-list.component';
import { TopicDetailComponent }  from './topic-detail.component';

import { TopicService } from './topic.service';

import { usersRouting } from './topics.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        usersRouting
    ],
    declarations: [
        UserListComponent,
        TopicDetailComponent
    ],
    providers: [
        TopicService
    ]
})
export class TopicsModule {}
