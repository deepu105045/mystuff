import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constant';
import { FirebaseService } from '../services/firebase/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private _router:Router , private _firebaseService :FirebaseService) { }

  ngOnInit(): void {
  }

  isLoggedIn(){
    if(localStorage.getItem(Constants.loggedinUser)!=null){
      return true;
    }else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem(Constants.loggedinUser);
    this._router.navigate(['login'])
  }

  goToLoginPage(){
    this._router.navigate(['login']);
  }
  

}
