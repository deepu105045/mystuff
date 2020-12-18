import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm : FormGroup;
  errorMessage: string;
  passwordMessage: string;
  usernameMessage: string;

  private validationMessage = {
    required: 'This field is required.',
    minlength: 'Minimum length 2 characters'
  };

  constructor(private _fb: FormBuilder,private _router:Router, private _firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.signinForm = this._fb.group({
      name:['',[Validators.required, Validators.minLength(2)]],
      email:['',[Validators.required, Validators.minLength(2)]],
      password:['',Validators.required],
      phonenumber:['',[Validators.required, Validators.minLength(6)]],

    });

    const nameCtrl = this.signinForm.get('name');
    const emailCtrl = this.signinForm.get('email');
    const passwordCtrl = this.signinForm.get('password');
    const phonenumberCtrl = this.signinForm.get('phonenumber');

    emailCtrl.valueChanges.pipe(debounceTime(1000)).subscribe(value =>{
      this.setMessage(emailCtrl, 'name');
    })

    passwordCtrl.valueChanges.subscribe(value =>{
      this.setMessage(passwordCtrl,'email');
    })

  }

  setMessage(c: AbstractControl, controlName: String): void {
    this.errorMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.errorMessage = Object.keys(c.errors).map(key =>
        this.validationMessage[key]).join('');
    }
    if (controlName === 'username') {
      this.usernameMessage = this.errorMessage;
    } else if (controlName === 'password') {
      this.passwordMessage = this.errorMessage;
    }
  }

  onSubmit():void{
    const email = this.signinForm.controls.email.value;
    const password = this.signinForm.controls.password.value;
    const name = this.signinForm.controls.name.value;
    const phonenumber = this.signinForm.controls.phonenumber.value;


    this._firebaseService.signup(email,password).then((res) =>{
      console.log('New Account has been created successfully')
      this._router.navigate(['dashboard'])
    })
    
  }
}
