/**
 * Created by Martin on 11/08/16.
 */
import { Component } from '@angular/core'

@Component({
    selector: 'navbar',
    styles: [`
        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            list-style: none;
        }
    `
    ],
    template: `
            <header>
                <nav role="navigation">
                    <ul>
                        <li><a href="">Eva</a></li>
                        <li><a href="">Bob</a></li>
                        <li><a href="">Gui</a></li>
                    </ul>
                </nav>
            </header>
        `
})
export class NavBar {}