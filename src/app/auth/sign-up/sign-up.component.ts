import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  email!: string;
  password!: string;

  constructor(
    public router: Router,
    public auth: AngularFireAuth) { }

  signUp() {
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .catch(error => console.log(error))
      .then(
        (res) => {
          this.router.navigate(['home'])
          console.log(res)
          
        }
      );


  }


}
