import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
import { map, debounce, debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() queryChild: any;
  loading: boolean;

  constructor(private dataService: DataService) { }

  domainsData: any;

  ngOnInit() {
      // this.dataService.getDataByQuery("facebook").subscribe(data => {
      //   this.domainsData = data.domains;
      // });

  }

  ngOnChanges(changes: SimpleChanges) {
    this.loading = true;
    this.dataService.getDataByQuery(changes.queryChild.currentValue)
    .pipe(
      debounceTime(500),
      map(data => {
        return data.domains.splice(0, 10)
      })
    )
    .subscribe(data => {
      console.log(data);
      this.domainsData = data;
      this.loading = false;
    });
  }

}