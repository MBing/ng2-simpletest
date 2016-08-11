/**
 * Created by Martin on 11/08/16.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { Topic, TopicService }  from './topic.service';
import { Subscription }       from 'rxjs/Subscription';

@Component({
    template: `
  <h2>HEROES</h2>
  <div *ngIf="topic">
    <h3>"{{topic.name}}"</h3>
    <div>
      <label>Id: </label>{{topic.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="topic.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoTopics()">Back</button>
    </p>
  </div>
  `
})
export class TopicDetailComponent implements OnInit, OnDestroy  {
    topic: Topic;

    private sub: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: TopicService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.service.getTopic(id).then(user => this.topic = user);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    gotoTopics() {
        let topicId = this.topic ? this.topic.uuid : null;
        // Pass along the topic id if available
        // so that the TopicList component can select that topic.
        this.router.navigate(['/topics', { uuid: topicId, foo: 'foo' }]);
    }
}
