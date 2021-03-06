/**
 * Created by Martin on 11/08/16.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User, UserService }  from './user.service';
import { Subscription }       from 'rxjs/Subscription';

@Component({
    template: `
    <ul class="items">
      <li *ngFor="let user of users"
        [class.selected]="isSelected(user)"
        (click)="onSelect(user)">
        {{user.name}}
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
        this.router.navigate(['/users', user.uuid]);
    }

}
