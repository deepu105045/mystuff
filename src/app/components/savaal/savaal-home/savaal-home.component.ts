import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-savaal-home',
  templateUrl: './savaal-home.component.html',
  styleUrls: ['./savaal-home.component.css']
})
export class SavaalHomeComponent implements OnInit {
  eventId: string;

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  goToEventsPage(){
    console.log(this.eventId)
    this._router.navigate([`/savaal/${this.eventId}`])

  }

}
