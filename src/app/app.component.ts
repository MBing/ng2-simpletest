/**
 * Created by Martin on 11/08/16.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <nav>
      <!--<a routerLink="/users" routerLinkActive="active">Users</a>-->
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}