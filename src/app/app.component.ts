import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'MoviesDatabase';
  signin:boolean;
  items: any;
  jsonData: any;
    currentRate = 0;
  
  constructor(
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() {
   

   }
}