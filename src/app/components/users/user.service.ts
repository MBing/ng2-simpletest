/**
 * Created by Martin on 11/08/16.
 */
import { Injectable } from '@angular/core'

export class User {
    constructor(public uuid: number, public name: string) { }
}

let Users = [
    new User(11, 'Eva'),
    new User(12, 'Bob'),
    new User(13, 'Gui'),
];

let userPromise = Promise.resolve(Users);

@Injectable()
export class UserService {
    getUsers() { return userPromise }

    getUser(uuid: number | string) {
        return userPromise.then(users => users.find(user => user.uuid === +uuid))
    }
}