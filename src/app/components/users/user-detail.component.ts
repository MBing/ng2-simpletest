/**
 * Created by Martin on 11/08/16.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { User, UserService }  from './user.service';
import { Subscription }       from 'rxjs/Subscription';

@Component({
    template: `
  <h2>HEROES</h2>
  <div *ngIf="user">
    <h3>"{{user.name}}"</h3>
    <div>
      <label>Id: </label>{{user.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="user.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoUsers()">Back</button>
    </p>
  </div>
  `
})
export class UserDetailComponent implements OnInit, OnDestroy  {
    user: User;

    private sub: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: UserService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.service.getUser(id).then(user => this.user = user);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    gotoUsers() {
        let userId = this.user ? this.user.uuid : null;
        // Pass along the user id if available
        // so that the UserList component can select that user.
        this.router.navigate(['/users', { uuid: userId, foo: 'foo' }]);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */