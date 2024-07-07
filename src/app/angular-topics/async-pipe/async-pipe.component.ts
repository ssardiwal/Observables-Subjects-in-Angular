import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable, take } from 'rxjs';

@Component({
  selector: 'async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent {

  currentTime$ = new Observable();

  data: any;

  constructor(public date: DatePipe) { }
  ngOnInit() {

    // observable that emits the current time every second
    this.currentTime$ = interval(1000).pipe(
      map(() => this.date.transform(new Date(), 'mediumTime'))
    );

    this.currentTime$.subscribe((res) => this.data = res)
  }

}
