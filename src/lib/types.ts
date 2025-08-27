export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  pricePerNight: number;
}

export interface Booking {
  id: string;
  userId: string;
  destinationId: string;
  destinationName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  bookedAt: Date;
}
