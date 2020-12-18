import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs/internal/Observable';
import firebase from 'firebase/app';
import { Constants } from 'src/app/constant';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  user$: Observable<firebase.User>;

  constructor(private firebaseAuth:AngularFireAuth) {
    this.user$ = this.firebaseAuth.authState;
   }

  async login(email:string, password:string):Promise<object> {
   let userObject =  await this.firebaseAuth.signInWithEmailAndPassword(email, password);
   localStorage.setItem(Constants.loggedinUser,JSON.stringify(userObject.user));
   return userObject;
  }

  async signup(email:string, password:string){
    const userObj = await this.firebaseAuth.createUserWithEmailAndPassword(email,password);
    localStorage.setItem(Constants.loggedinUser,JSON.stringify(userObj.user));
  }

  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem(Constants.loggedinUser)

  }

  getCurrentUser(){
    return localStorage.getItem(Constants.loggedinUser);
  }


  isLoggedIn() {
    return this.firebaseAuth.authState;
  }
}
