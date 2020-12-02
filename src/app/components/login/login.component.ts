import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from  'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform : FormGroup;
  errorMessage: string;
  passwordMessage: string;
  usernameMessage: string;

  private validationMessage = {
    required: 'This field is required.',
    minlength: 'Minimum length 2 characters'
  };

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginform = this._fb.group({
      username:['',[Validators.required, Validators.minLength(2)]],
      password:['',Validators.required]
    });

    const passwordCtrl = this.loginform.get('password');
    const usernameCtrl = this.loginform.get('username');

    usernameCtrl.valueChanges.pipe(debounceTime(1000)).subscribe(value =>{
      this.setMessage(usernameCtrl, 'username');
    })

    passwordCtrl.valueChanges.subscribe(value =>{
      this.setMessage(passwordCtrl,'password');
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
    const username = this.loginform.controls.username.value;
    const password = this.loginform.controls.password.value;
    if(username === 'test' && password === 'test'){
      console.log("Logged in ")
    }

  }

}
