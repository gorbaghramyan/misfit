import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public path: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.path = this.router.url;
    console.log(this.router.url);
  }

}
