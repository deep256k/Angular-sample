import { CarDataresponse, ParkingDetails } from "./parking.model";

export const carData: CarDataresponse[] = [
    {
      carNo: 'KA-64-YX-0619',
      color: 'Red',
      slot: 1,
      date: new Date(),
    },
    {
      carNo: 'KA-64-YX-1659',
      color: 'White',
      slot: 2,
      date: new Date(),
    },
    {
      carNo: 'KA-64-YX-2615',
      color: 'Blue',
      slot: 3,
      date: new Date(),
    },
    {
      carNo: 'KA-64-YX-6619',
      color: 'Black',
      slot: 4,
      date: new Date(),
    },
    {
      carNo: 'KA-64-YX-8614',
      color: 'Red',
      slot: 5,
      date: new Date(),
    },
  ];

  export const slotDetails : ParkingDetails= {
    "totalParkingSlots": 10,
    "availableSlots": 5
}