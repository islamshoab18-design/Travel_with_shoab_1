import { getDestinationById } from '@/lib/mock-data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { BookingForm } from '@/components/booking-form';
import { MapPin, DollarSign, Info } from 'lucide-react';

export default function BookPage({ params }: { params: { id: string } }) {
  const destination = getDestinationById(params.id);

  if (!destination) {
    notFound();
  }

  const hints: { [key: string]: string } = {
    'sylhet-tea-gardens': 'tea gardens',
    'sundarbans-mangrove': 'mangrove forest',
    'coxs-bazar-beach': 'sandy beach',
    'bandarban-hills': 'scenic hills',
    'saint-martin-island': 'coral island',
    'rangamati-lake': 'serene lake',
  };

  return (
    <div className="container py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              style={{ objectFit: 'cover' }}
              data-ai-hint={hints[destination.id] || 'travel destination'}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-6">
            <h1 className="text-3xl md:text-4xl font-bold font-headline">{destination.name}</h1>
            <div className="mt-3 flex flex-col gap-2 text-muted-foreground">
                <p className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> {destination.location}</p>
                <p className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-primary" /> <span className="font-semibold text-foreground">BDT {destination.pricePerNight}</span> per night</p>
                <p className="flex items-center gap-2"><Info className="w-5 h-5 text-primary" /> {destination.description}</p>
            </div>
          </div>
        </div>
        <div>
          <BookingForm destination={destination} />
        </div>
      </div>
    </div>
  );
}
