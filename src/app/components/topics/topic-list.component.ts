/**
 * Created by Martin on 11/08/16.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Topic, TopicService }  from './';
import { Subscription }       from 'rxjs/Subscription';

@Component({
    template: `
    <h2>Topics</h2>
    <ul class="items">
      <li *ngFor="let topic of topics"
        [class.selected]="isSelected(topic)"
        (click)="onSelect(topic)">
        <span class="badge">{{topic.id}}</span> {{topic.name}}
      </li>
    </ul>
  `
})
export class TopicListComponent implements OnInit, OnDestroy {
    topics: Topic[];

    private selectedId: number;
    private sub: Subscription;

    constructor(
        private service: TopicService,
        private route: ActivatedRoute,
        private router: Router) {}

    ngOnInit() {
        this.sub = this.route
            .params
            .subscribe(params => {
                this.selectedId = +params['id'];
                this.service.getTopics()
                    .then(topics => this.topics = topics);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    isSelected(topic: Topic) { return topic.uuid === this.selectedId; }

    onSelect(topic: Topic) {
        this.router.navigate(['/topic', topic.uuid]);
    }

}
