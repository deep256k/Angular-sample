import { Component, OnInit, OnDestroy, ViewChildren, QueryList, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarDataresponse, ParkingDetails } from '../../shared/parking.model';
import { SortDataDirective, SortEvent } from '../../shared/sort-data.directive';
import {ParkingService} from '../../service/parking.service'
const compare = (v1: string, v2: string) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy,DoCheck {
  parkedCar: CarDataresponse[];
  carDetails: CarDataresponse[];
  searchCar: string;
  selectedColor: string;
  collection = 0;
  collectionSubscription: Subscription;
  colorOptions = ['Black', 'Blue', 'Red', 'White'];
  isFiltered = false;
  slotDetails:ParkingDetails;
  availableSlots = [];
  noparking = false;
  @ViewChildren(SortDataDirective) headers: QueryList<SortDataDirective>;
  constructor(public parkingService: ParkingService, private router: Router) {}

  ngOnInit(): void {
   this.parkingService.getCurrentParkingStatus.subscribe(res =>{
     this.carDetails = res;
     this.parkedCar = res;
   })
    this.slotDetails = this.parkingService.slotData;
    this.collectionSubscription = this.parkingService.getCollection.subscribe(
      (res) => {
        this.collection = res;
      }
    );
  }

  ngDoCheck(){
    this.noparking = true ? this.parkedCar.length >= 10 : false;
  }
  onPark() {
    this.router.navigate(['park-car']);
  }
  onRemove(data) {
    this.carDetails = this.carDetails.filter(el =>{
      return el.slot !== data.slot;
    })
    this.parkedCar = this.carDetails;
    this.availableSlots.push(data.slot);
    this.parkingService.setCollection(this.collection + 10);
    this.parkingService.setCurrentParkingStatus(this.parkedCar);
  }
  onReset() {
    this.searchCar = '';
    this.parkedCar = this.carDetails;
  }
  
  onSearch() {
    if (this.searchCar && !this.isFiltered) {
      this.parkedCar = this.carDetails.filter((el) => {
        return el.carNo.toLowerCase().includes(this.searchCar.toLowerCase());
      });
    }
    else {
      this.parkedCar = this.parkedCar.filter((el) => {
        return el.carNo.toLowerCase().includes(this.searchCar.toLowerCase());
      });
    }
  }
  
  onQuery() {
    alert(`Current collection is ${this.collection}`);
  }

  filterCarData(filterColor) {
    if (filterColor) {
      this.parkedCar = this.carDetails.filter((el) => {
        return el.color === filterColor;
      });
      this.isFiltered = true;
    } 
    else {
      this.parkedCar = this.carDetails;
      this.isFiltered = false;
    }
  }

  onSort({column, direction}: SortEvent){
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    if (direction === '' || column === '') {
      this.parkedCar = this.carDetails;
    }
    else {
      this.parkedCar = [...this.carDetails].sort((a, b) => {
        if(a[column] && b[column]){
          const res = compare(`${a[column]}`, `${b[column]}`);
           return direction === 'asc' ? res : -res;
        }else{
          const res = compare(`${a[column]}`, `${b[column]}`);
           return direction === 'asc' ? res : -res;
        }
        
      });
    }
  }

  ngOnDestroy() {
    this.collectionSubscription.unsubscribe();
  }
}
