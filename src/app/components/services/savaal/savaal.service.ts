import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { EventData } from '../../model/eventData.model';
import { Question } from '../../model/question.model';


@Injectable({
  providedIn: 'root'
})
export class SavaalService {
  QUESTIONS = 'questions';
  EVENTS ='events'

  eventsRef = this.firestore.collection(this.EVENTS);

  constructor(private firestore: AngularFirestore) { }

  saveQuestion(question: Question){
    return this.eventsRef.doc(question.eventCode).collection(this.QUESTIONS)
                         .add(JSON.parse(JSON.stringify(question)))
    
  }


  getQuestionsByEventCode(eventCode: string){
    let url= this.EVENTS+'/'+eventCode+'/'+this.QUESTIONS ;
    let questionCollectionRef= this.firestore.collection<Question>(url, ref => ref.orderBy('likes','desc'));

    return questionCollectionRef.snapshotChanges();
  }


  async upVoteQuestion(question:Question){
    this.eventsRef.doc(question.eventCode).collection(this.QUESTIONS).doc(question.id)
                  .set(
                       { likes: question.likes + 1 },
                       { merge: true }
                      );

  }

  addEventData(eventData:EventData){
    return this.eventsRef.doc(eventData.eventCode).set(JSON.parse(JSON.stringify(eventData)));
  }

  getEventByCode(eventyCode: string){
    return this.eventsRef.doc(eventyCode).get();
  }


}
