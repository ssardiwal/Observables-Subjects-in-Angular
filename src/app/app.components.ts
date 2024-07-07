
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'observables-subject-in-angular';

  constructor(public __httpClient: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    let request = JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
    let headers = new HttpHeaders();
    this.__httpClient.post("https://jsonplaceholder.typicode.com/posts", request, { headers }).subscribe((res) => {
      console.log(res);
    })
  }

}
