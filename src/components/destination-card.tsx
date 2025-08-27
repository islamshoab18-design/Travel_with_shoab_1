import Image from 'next/image';
import Link from 'next/link';
import type { Destination } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  const hints: { [key: string]: string } = {
    'sylhet-tea-gardens': 'tea gardens',
    'sundarbans-mangrove': 'mangrove forest',
    'coxs-bazar-beach': 'sandy beach',
    'bandarban-hills': 'scenic hills',
    'saint-martin-island': 'coral island',
    'rangamati-lake': 'serene lake',
  };

  return (
    <Card className="w-full overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            style={{ objectFit: 'cover' }}
            data-ai-hint={hints[destination.id] || 'travel destination'}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl font-headline">{destination.name}</CardTitle>
        <CardDescription className="mt-2 flex items-center gap-1 text-sm">
            <MapPin className="w-4 h-4"/>
            {destination.location}
        </CardDescription>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{destination.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div>
            <span className="font-bold text-lg text-primary">BDT {destination.pricePerNight}</span>
            <span className="text-sm text-muted-foreground">/night</span>
        </div>
        <Button asChild>
          <Link href={`/book/${destination.id}`}>Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
