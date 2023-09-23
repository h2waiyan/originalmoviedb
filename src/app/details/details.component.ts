import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private location: Location, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation!.extras.state as { example: string };
    this.example = state.example;
  }

  example: string;

  ngOnInit() {
    console.log(">>>>");
    console.log(this.example);
  }
}
