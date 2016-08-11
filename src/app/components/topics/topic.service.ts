/**
 * Created by Martin on 11/08/16.
 */
import { Injectable } from '@angular/core'

export class Topic {
    constructor(public uuid: number, public name: string) { }
}

let Topics = [
    new Topic(1, 'Write Mail'),
    new Topic(2, 'Details'),
    new Topic(3, 'Profile'),
    new Topic(4, 'Help'),
];

let topicPromise = Promise.resolve(Topics);

@Injectable()
export class TopicService {
    getTopics() { return topicPromise }

    getTopic(uuid: number | string) {
        return topicPromise.then(topics => topics.find(topic => topic.uuid === +uuid))
    }
}