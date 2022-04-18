import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { environment } from '../environments/environment';
import { DatePipe } from '@angular/common';

//Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

//services
import { AuthService } from './services/auth.service';
import { AdsService } from './services/ads.service';

//components
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdsComponent } from './ads/ads.component';
import { AddAdsComponent } from './add-ads/add-ads.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    AdsComponent,
    AddAdsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],

  providers: [
    AuthService,
    AdsService,
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
