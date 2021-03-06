/**
 * Created by Martin on 11/08/16.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { User, UserService }  from './user.service';
import { Subscription }       from 'rxjs/Subscription';

@Component({
    template: `
  <h2>User</h2>
  <div *ngIf="user">
    <h3>"{{user.name}}"</h3>
    <div>
      <label>Id: </label>{{user.uuid}}</div>
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
            let id = +params['uuid']; // (+) converts string 'id' to a number
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
        this.router.navigate(['/users']);
    }
}
