import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public path: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.path = this.router.url;
    console.log(this.router.url);
  }
}

