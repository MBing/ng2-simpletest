/**
 * Created by Martin on 11/08/16.
 */
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }       from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { UsersModule } from './components/users/users.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        UsersModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        // appRoutingProviders,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}