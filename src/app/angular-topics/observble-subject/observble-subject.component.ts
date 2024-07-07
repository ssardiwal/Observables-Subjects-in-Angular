import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-observble-subject',
  templateUrl: './observble-subject.component.html'
})
export class ObservbleSubjectComponent implements OnInit {

  ngOnInit() {

    // observable
    let obs = new Observable((observer) => {
      observer.next(Math.random());
    })
    // both will print different random number because each subscribers gets it own indepedent execution
    obs.subscribe((data) => console.log('data :>> ', data));
    obs.subscribe((data) => console.log('data :>> ', data));


    // subject
    // both will print same random number because each subscribers have same execution
    let sub1 = new Subject();
    sub1.subscribe((data) => console.log('data :>> ', data))
    sub1.subscribe((data) => console.log('data :>> ', data))

    sub1.next(Math.random())
  }
}
