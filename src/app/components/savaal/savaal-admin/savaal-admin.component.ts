import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constant';
import { EventData } from '../../model/eventData.model';
import { SavaalService } from '../../services/savaal/savaal.service';

@Component({
  selector: 'app-savaal-admin',
  templateUrl: './savaal-admin.component.html',
  styleUrls: ['./savaal-admin.component.css']
})
export class SavaalAdminComponent implements OnInit {
  eventDetails: string;
  eventDate: string;
  eventCode: string;

  constructor(private _savaalService: SavaalService) {
  }
  ngOnInit(): void {
  }

  createEvent(){
    let eventData = new EventData();
    eventData.eventCode = this.eventCode;
    eventData.eventDate = this.eventDate;
    eventData.eventDetails = this.eventDetails;
    eventData.status = Constants.SCHEDULED;

    this._savaalService.addEventData(eventData).then(data =>{
      console.log(data)
    }).catch(err =>{
      console.log(err)
    })
  }


}
