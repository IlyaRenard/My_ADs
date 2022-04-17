import { Component, OnInit } from '@angular/core';
import { Ads } from '../models/ads';
import { AdsService } from '../services/ads.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss'],
})
export class AddAdsComponent implements OnInit {

  ads: Ads = new Ads();
  selectedCategory!: string;
  selectedTypeRealty!:string;
  constructor(private adsService: AdsService, private authService:AuthService) { }
  ngOnInit(): void {
  }


  category: any = {
    realty: 'Realty',
    computer: 'Computer',
  };

  typeRealty:any = {
    flat:"Flat",
    house:"House",
    ground:"Ground",
    garage:"Garage",
    commercialRealty:"Commercial realty"
  }

  
  saveAds(): void {
    this.adsService.create(this.ads,this.authService.userData.uid).then(() => {
      console.log('Created new item successfully!');

     
    });
  }
  


}
