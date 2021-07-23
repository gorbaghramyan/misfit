import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public path: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.path = this.router.url;
    console.log(this.router.url);
  }
}
