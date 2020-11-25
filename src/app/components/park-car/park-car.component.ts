import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParkingService } from '../../service/parking.service';
import { CarDataresponse } from '../../shared/parking.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-park-car',
  templateUrl: './park-car.component.html',
  styleUrls: ['./park-car.component.scss'],
})
export class ParkCarComponent implements OnInit, OnDestroy {
  parkForm: FormGroup;
  newPakingStatus: CarDataresponse[];
  parkingSubscription: Subscription;

  constructor(private router: Router, private parkingService: ParkingService) {}

  ngOnInit(): void {
    this.inItform();
  }

  onPark() {
    this.parkingSubscription = this.parkingService.getCurrentParkingStatus.subscribe(
      (response) => {
        if (response && response.length) {
          this.newPakingStatus = response;
        }
      }
    );
    const slotInserted = this.findSlot(this.newPakingStatus);
    const parkDetails = {
      carNo: this.parkForm.value['numberPlate'],
      color:
        this.parkForm.value['carColor'].charAt(0).toUpperCase() +
        this.parkForm.value['carColor'].slice(1).toLowerCase(),
      slot: slotInserted,
      date: new Date(),
    };
    this.router.navigate(['dashboard']);

    this.newPakingStatus.push(parkDetails);
    this.parkingService.setCurrentParkingStatus(this.newPakingStatus);
  }

  private findSlot(currentSlots) {
    let sortedSlot = currentSlots.map((el) => el['slot']);
    sortedSlot.sort((a, b) => {
      return a - b;
    });
    for (var i = 0; i < sortedSlot.length; i++) {
      if (sortedSlot[i] !== i + 1) {
        sortedSlot.push(i + 1);
        break;
      }
    }
    return i + 1;
  }
  private inItform() {
    this.parkForm = new FormGroup({
      numberPlate: new FormControl('', [Validators.required]),
      carColor: new FormControl('', [Validators.required]),
    });
  }
  ngOnDestroy() {
    this.parkingSubscription.unsubscribe();
  }
}
