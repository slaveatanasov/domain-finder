import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string;
  @Output() retrieveQuery: EventEmitter<string> = new EventEmitter;

  constructor() {}

  sendQuery() {
    this.retrieveQuery.emit(this.query);
  }

  ngOnInit() {
  }

}