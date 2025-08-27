import type { Destination, Booking } from './types';

export const destinations: Destination[] = [
  {
    id: 'sylhet-tea-gardens',
    name: 'Serene Tea Gardens',
    location: 'Sylhet, Bangladesh',
    description: 'Experience the tranquility of lush green tea gardens, a signature of the Sylhet region.',
    image: 'https://picsum.photos/600/400?random=1',
    pricePerNight: 2500,
  },
  {
    id: 'sundarbans-mangrove',
    name: 'Mystical Mangrove Forest',
    location: 'Sundarbans, Bangladesh',
    description: "Explore the world's largest mangrove forest, home to the Royal Bengal Tiger.",
    image: 'https://picsum.photos/600/400?random=2',
    pricePerNight: 3200,
  },
  {
    id: 'coxs-bazar-beach',
    name: 'Endless Sandy Beach',
    location: "Cox's Bazar, Bangladesh",
    description: "Relax on the world's longest uninterrupted sandy beach, stretching over 120 km.",
    image: 'https://picsum.photos/600/400?random=3',
    pricePerNight: 2800,
  },
  {
    id: 'bandarban-hills',
    name: 'Adventurous Hill Tracts',
    location: 'Bandarban, Bangladesh',
    description: 'Trek through the scenic hills of Bandarban and discover tribal cultures.',
    image: 'https://picsum.photos/600/400?random=4',
    pricePerNight: 2700,
  },
    {
    id: 'saint-martin-island',
    name: 'Coral Island Paradise',
    location: "Saint Martin's Island, Bangladesh",
    description: 'A beautiful coral island with clear blue waters, perfect for a peaceful getaway.',
    image: 'https://picsum.photos/600/400?random=5',
    pricePerNight: 4500,
  },
  {
    id: 'rangamati-lake',
    name: 'Kaptai Lake Escape',
    location: 'Rangamati, Bangladesh',
    description: 'Enjoy boat rides and serene views on the largest man-made lake in Bangladesh.',
    image: 'https://picsum.photos/600/400?random=6',
    pricePerNight: 2600,
  }
];

// In-memory array to store bookings
let bookings: Booking[] = [];

export const getDestinations = (): Destination[] => destinations;

export const getDestinationById = (id: string): Destination | undefined => {
  return destinations.find((d) => d.id === id);
};

export const addBooking = (bookingData: Omit<Booking, 'id' | 'bookedAt'>): Booking => {
  const newBooking: Booking = {
    id: `booking-${Date.now()}-${Math.random().toString(36).substring(7)}`,
    bookedAt: new Date(),
    ...bookingData,
  };
  bookings.push(newBooking);
  console.log('Current bookings:', bookings);
  return newBooking;
};

export const getBookingsByUserId = (userId: string): Booking[] => {
  return bookings.filter(b => b.userId === userId).sort((a, b) => b.bookedAt.getTime() - a.bookedAt.getTime());
};
