export interface ParkingDetails{
  totalParkingSlots: number,
  availableSlots: number
}

export interface CarDataresponse {
  carNo: string;
  color: string;
  slot: number;
  date: Date | string;
}

export interface SortHeader{
  blank: string,
  carNo: string,
  color: string,
  slot: number,
  date: string
}