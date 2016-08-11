/**
 * Created by Martin on 11/08/16.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User, UserService }  from './user.service';
import { Subscription }       from 'rxjs/Subscription';

@Component({
    template: `
    <h2>Users</h2>
    <ul class="items">
      <li *ngFor="let user of users"
        [class.selected]="isSelected(user)"
        (click)="onSelect(user)">
        <span class="badge">{{user.uuid}}</span> {{user.name}}
      </li>
    </ul>
  `
})
export class UserListComponent implements OnInit, OnDestroy {
    users: User[];

    private selectedId: number;
    private sub: Subscription;

    constructor(
        private service: UserService,
        private route: ActivatedRoute,
        private router: Router) {}

    ngOnInit() {
        this.sub = this.route
            .params
            .subscribe(params => {
                this.selectedId = +params['uuid'];
                this.service.getUsers()
                    .then(users => this.users = users);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    isSelected(user: User) { return user.uuid === this.selectedId; }

    onSelect(user: User) {
        this.router.navigate(['/user', user.uuid]);
    }

}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */