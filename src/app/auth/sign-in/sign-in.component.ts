import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  email!: string;
  password!: string;

  constructor(
    public router: Router,
    public auth: AngularFireAuth) {

  }

  signIn() {
    console.log(this.email, this.password);

    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .catch(error => console.log(error.code))
      .then((res) => {
        this.router.navigate(['home'])
        console.log(res)
      });


  }

}
