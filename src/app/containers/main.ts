/**
 * Created by Martin on 11/08/16.
 */
import { Component } from '@angular/core';
import { NavBar } from '../components/navbar'

@Component({
    selector: 'main-container',
    directives: [ NavBar ],
    template: `
                <div>
                    <navbar></navbar>
                    <main class="main">
                        content here
                    </main>
                </div>
              `
})
export class Main {}