import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  queryParent: string;

  getQuery(searchQuery: any) {
    console.log(searchQuery);
    this.queryParent = searchQuery;
    console.log(this.queryParent)
  }

  constructor() { }
  ngOnInit() { 
  }

}