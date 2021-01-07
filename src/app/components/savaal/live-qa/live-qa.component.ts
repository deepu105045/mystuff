import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventData } from '../../model/eventData.model';
import { Question } from '../../model/question.model';
import { SavaalService } from '../../services/savaal/savaal.service';

@Component({
  selector: 'app-live-qa',
  templateUrl: './live-qa.component.html',
  styleUrls: ['./live-qa.component.css']
})
export class LiveQaComponent implements OnInit {
  eventCode: any;
  eventdata: EventData;

  question: string;
  allQuestions: Question[];

  constructor(private route: ActivatedRoute,private _savaalService: SavaalService) {
    this.eventCode = this.route.snapshot.params['id'];
    
    this._savaalService.getEventByCode(this.eventCode).subscribe(docRef  =>{
      this.eventdata = docRef.data() as EventData
    }, err =>{
      console.error('Observer got an error: ' + err)
    })



   }

  ngOnInit(): void {
     this.getQuestions();
  }

  postQuestion(){
    let post = new Question();
    post.question = this.question;
    post.likes = 0;
    post.eventCode = this.eventCode;
    this._savaalService.saveQuestion(post);
  }

  getQuestions(){
    this._savaalService.getQuestionsByEventCode(this.eventCode).subscribe(data =>{
      this.allQuestions = data.map(e =>{
        return {
          id :e.payload.doc.id,
          question :e.payload.doc.data().question,
          likes: e.payload.doc.data().likes,
          eventCode: e.payload.doc.data().eventCode
        } ;
      })
    });
  }



  upvote(question:Question){
    this._savaalService.upVoteQuestion(question);
  }


}
  