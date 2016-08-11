/**
 * Created by Martin on 11/08/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {
            TopicListComponent,
            TopicDetailComponent,
            TopicService,
            topicsRouting
        } from './';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        topicsRouting
    ],
    declarations: [
        TopicListComponent,
        TopicDetailComponent
    ],
    providers: [
        TopicService
    ]
})
export class TopicsModule {}
