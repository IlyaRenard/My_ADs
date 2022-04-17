import { Component, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  updateProfile: boolean = false;
  currentUser1: any;

  curUser:User ={
    uid!: '',
    email!: '',
    displayName!: '',
    phoneNumber!: '',
    photoURL!: ''
  }

  constructor(public authService: AuthService, public router: Router, public ngZone: NgZone,) {this.getData() }

  ngOnInit(): void {
    this.getData()
  }

  /* ngOnChanges(): void{
    this.getData()
  } */

  getData(){
    this.authService.userRef.doc(this.authService.userData.uid).valueChanges().subscribe((response) => {
      this.currentUser1 = response;
  });
  }

  editProfile() {
    this.updateProfile = !this.updateProfile;
  }

  updateUser(): void {
    const data = {
      displayName: this.curUser.displayName,
      phoneNumber: this.curUser.phoneNumber
    };
    console.log(this.authService.userData.phoneNumber);
    
    if (this.authService.userData.uid) {
      this.authService.update(this.authService.userData.uid, data)
        .then(() => {
          alert("Updating profile")
        })
        .catch(err => console.log(err));
    }

  }

}
