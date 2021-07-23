import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public path: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.path = this.router.url;
    console.log(this.router.url);
  }

}
