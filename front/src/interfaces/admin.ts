export interface adminUser {
  id: string;
  name: string;
  email: string;
}

export interface adminReservation {
  id: string;
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
}