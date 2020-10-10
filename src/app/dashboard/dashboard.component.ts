import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  collapedSideBar: boolean;
  constructor(
    public router: Router,
    public ngZone: NgZone
  ) { }
  ngOnInit() {
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
}
}
