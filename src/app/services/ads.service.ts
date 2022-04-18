import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Ads } from '../models/ads';


@Injectable({
  providedIn: 'root'
})
export class AdsService {

  private dbPath = '/ads';
  adsRef: AngularFirestoreCollection<Ads>;
  constructor(private db: AngularFirestore) {
    this.adsRef = db.collection(this.dbPath);
    
  }

  
  getAll(): AngularFirestoreCollection<Ads> {
    return this.adsRef;
  }
  create(ads: Ads, uid: string): any {
    return this.adsRef.add({ ...ads, uid });
  }
  update(id: string, data: any): Promise<void> {
    return this.adsRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.adsRef.doc(id).delete();
  }
}
