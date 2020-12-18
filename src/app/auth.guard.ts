import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable ,of  } from 'rxjs';
import { FirebaseService } from './components/services/firebase/firebase.service';
import { Constants } from './constant';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _firebaseService :FirebaseService){
  }

  canActivate() {
    if(localStorage.getItem(Constants.loggedinUser)!=null){
      return of(true);
    }else{
      return of(false);
    }
  }
}
