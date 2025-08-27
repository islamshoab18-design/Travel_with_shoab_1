"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { getBookingsByUserId } from '@/lib/mock-data';
import type { Booking } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { format } from 'date-fns';
import { Calendar, Users, DollarSign } from 'lucide-react';

export default function MyBookingsPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      router.replace('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    function fetchBookings() {
      if (user) {
        setLoading(true);
        try {
            // Fetch bookings from local mock data
            const userBookings = getBookingsByUserId(user.uid);
            setBookings(userBookings);
        } catch (error) {
            console.error("Failed to fetch bookings:", error);
        } finally {
            setLoading(false);
        }
      }
    }
    if (!authLoading && user) {
        fetchBookings();
    }
  }, [user, authLoading]);

  if (authLoading || !user) {
    return (
      <div className="container py-12">
        <div className="space-y-4">
            <Skeleton className="h-8 w-1/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-48 w-full rounded-lg" />
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold font-headline">My Bookings</h1>
      <p className="mt-2 text-muted-foreground">Here are all the trips you've booked with us.</p>
      
      {loading ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[...Array(2)].map((_, i) => (
                <Card key={i}>
                    <CardHeader><Skeleton className="h-6 w-3/4 rounded-md" /></CardHeader>
                    <CardContent className="space-y-3">
                        <Skeleton className="h-4 w-full rounded-md" />
                        <Skeleton className="h-4 w-full rounded-md" />
                        <Skeleton className="h-4 w-2/3 rounded-md" />
                    </CardContent>
                </Card>
            ))}
        </div>
      ) : bookings.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {bookings.map((booking) => (
            <Card key={booking.id} className="overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{booking.destinationName}</CardTitle>
                    <CardDescription>Booked on {format(booking.bookedAt, "PPP")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{format(new Date(booking.checkIn), "MMM dd, yyyy")} to {format(new Date(booking.checkOut), "MMM dd, yyyy")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{booking.guests} guest(s)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span>Total Price: BDT {booking.totalPrice}</span>
                    </div>
                </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center text-center border-2 border-dashed border-border rounded-lg py-16">
          <h2 className="text-2xl font-semibold font-headline">No Bookings Yet</h2>
          <p className="mt-2 text-muted-foreground">You haven't booked any trips. Ready for an adventure?</p>
          <Button asChild className="mt-6">
            <Link href="/search">Explore Destinations</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
