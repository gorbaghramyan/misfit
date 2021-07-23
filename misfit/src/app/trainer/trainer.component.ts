import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  public path: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.path = this.router.url;
    console.log(this.router.url);
  }

}
