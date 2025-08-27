"use client";

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { DestinationCard } from '@/components/destination-card';
import { getDestinations } from '@/lib/mock-data';
import { SearchIcon } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchPage() {
  const allDestinations = useMemo(() => getDestinations(), []);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  
  const filteredDestinations = useMemo(() => {
    let destinations = allDestinations.filter(d =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortBy === 'price_asc') {
      destinations = destinations.sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (sortBy === 'price_desc') {
      destinations = destinations.sort((a, b) => b.pricePerNight - a.pricePerNight);
    } else {
      destinations = destinations.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return destinations;
  }, [searchTerm, allDestinations, sortBy]);

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-headline">Find Your Next Destination</h1>
        <p className="mt-4 text-muted-foreground">Search for hotels and destinations across Bangladesh.</p>
      </div>

      <div className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
                type="text"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
            />
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[180px] h-12">
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="price_asc">Price: Low to High</SelectItem>
                <SelectItem value="price_desc">Price: High to Low</SelectItem>
            </SelectContent>
        </Select>
      </div>

      <div className="mt-12">
        {filteredDestinations.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold">No Destinations Found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your search filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
