/**
 * Created by Martin on 11/08/16.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'main-container',
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