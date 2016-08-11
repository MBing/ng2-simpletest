/**
 * Created by Martin on 11/08/16.
 */
import { Component } from '@angular/core';
import { Main } from './containers';

@Component({
    selector: 'app',
    directives: [ Main ],
    template: `
                <div>
                  <main-container></main-container>
                </div>
              `
})
export class App {}