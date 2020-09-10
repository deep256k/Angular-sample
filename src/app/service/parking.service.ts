import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CarDataresponse, ParkingDetails } from '../shared/parking.model';
import {carData,slotDetails} from '../shared/parking.config'

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  carDetails: CarDataresponse[] = carData;
  slotData:ParkingDetails = slotDetails;
  parkingDetails = new BehaviorSubject<ParkingDetails>(slotDetails);
  public readonly getParkingDetails: Observable<ParkingDetails> = this.parkingDetails.asObservable();
  collection = new BehaviorSubject<number>(0);
  public readonly getCollection: Observable<number> = this.collection.asObservable();
  parkedCarDetails = new BehaviorSubject<any>(null);
  public readonly getparkedCarDetails: Observable<any> = this.parkedCarDetails.asObservable();
  currentParkingStatus = new BehaviorSubject<CarDataresponse[]>(this.carDetails);
  getCurrentParkingStatus : Observable<any> = this.currentParkingStatus.asObservable();

  constructor() {}

  getCarDetails() {
    return this.carDetails.slice();
  }
  setParkingDetails(details: ParkingDetails) {
    this.parkingDetails.next(details);
  }
  setParkedCarDetails(details: any) {
    
  }
  setCollection(amount:number){
    this.collection.next(amount);
  }
  setCurrentParkingStatus(currentStatus :CarDataresponse[]){
  this.currentParkingStatus.next(currentStatus);
  }
}
