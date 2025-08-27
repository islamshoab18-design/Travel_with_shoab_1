import { Button } from "@/components/ui/button";
import { DestinationCard } from "@/components/destination-card";
import { getDestinations } from "@/lib/mock-data";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const destinations = getDestinations().slice(0, 4);

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/1600/900?random=hero"
          alt="Beautiful landscape in Bangladesh"
          fill
          style={{ objectFit: 'cover' }}
          className="z-0 brightness-50"
          priority
          data-ai-hint="beautiful landscape"
        />
        <div className="z-10 p-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight drop-shadow-lg">
            Your Bangladeshi Adventure Awaits
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Discover the hidden gems of Bangladesh, from lush tea gardens to the world's longest beach. Plan your perfect trip with us.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/search">Explore Destinations</Link>
          </Button>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center font-headline">Popular Destinations</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Get inspired by our most popular destinations. Your next story is waiting to be written.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
