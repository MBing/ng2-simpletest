/**
 * Created by Martin on 11/08/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {    UserListComponent,
            UserDetailComponent,
            UserService,
            usersRouting
        }    from './';

import { TopicListComponent } from '../topics';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        usersRouting,
        TopicListComponent
    ],
    declarations: [
        UserListComponent,
        UserDetailComponent
    ],
    exports: [
        UserListComponent,
        UserDetailComponent
    ],
    providers: [
        UserService
    ]
})
export class UsersModule {}
