import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParkingService } from '../../service/parking.service';

@Component({
  selector: 'app-park-car',
  templateUrl: './park-car.component.html',
  styleUrls: ['./park-car.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ParkCarComponent implements OnInit {
  parkForm: FormGroup;
  newPakingStatus = [];
  constructor(private router: Router, private parkingService: ParkingService) {}

  ngOnInit(): void {
    this.inItform();
  }

  onPark() {
    const parkDetails = {
      carNo: this.parkForm.value['numberPlate'],
      color: this.parkForm.value['carColor'].charAt(0).toUpperCase() + this.parkForm.value['carColor'].slice(1).toLowerCase(),
      date: new Date()
    };
    this.router.navigate(['dashboard']);
    this.parkingService.getCurrentParkingStatus.subscribe(res =>{
      this.newPakingStatus = res;
    })
    this.newPakingStatus.push(parkDetails);
    this.parkingService.setCurrentParkingStatus(this.newPakingStatus)
  }

  private inItform() {
    this.parkForm = new FormGroup({
      numberPlate: new FormControl('', [Validators.required]),
      carColor: new FormControl('', [Validators.required]),
    });
  }
}
