import { CarDataresponse, ParkingDetails } from "./parking.model";

export const carData: CarDataresponse[] = [
    {
      carNo: 'KA64YX0619',
      color: 'Red',
      slot: 1,
      date:'Sep 10, 2019, 2:32:10 PM',
    },
    {
      carNo: 'KA64YX1659',
      color: 'White',
      slot: 10,
      date: 'Sep 16, 2019, 2:32:10 PM',
    },
    {
      carNo: 'KA64YX2615',
      color: 'Blue',
      slot: 3,
      date: 'Sep 22, 2019, 2:32:10 PM',
    },
    {
      carNo: 'KA64YX6619',
      color: 'Black',
      slot: 9,
      date: 'Sep 18, 2019, 2:32:10 PM',
    },
    {
      carNo: 'KA64YX8614',
      color: 'Red',
      slot: 2,
      date: 'Sep 13, 2019, 2:32:10 PM',
    },
  ];

  export const slotDetails : ParkingDetails= {
    "totalParkingSlots": 10,
    "availableSlots": 5
}