import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  goToKitchen(){
    this._router.navigate(['kitchen']);
  }

  goToSavaal(){
    this._router.navigate(['savaal']);

  }

}
