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

  collection = new BehaviorSubject<number>(0);
  public readonly getCollection: Observable<number> = this.collection.asObservable();

  currentParkingStatus = new BehaviorSubject<CarDataresponse[]>(carData);
  public readonly getCurrentParkingStatus : Observable<CarDataresponse[]> = this.currentParkingStatus.asObservable();

  constructor() {}

  setCollection(amount:number){
    this.collection.next(amount);
  }
  setCurrentParkingStatus(currentStatus :CarDataresponse[]){
  this.currentParkingStatus.next(currentStatus);
  }
}
