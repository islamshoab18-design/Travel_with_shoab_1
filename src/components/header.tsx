"use client";

import Link from 'next/link';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { MountainSnow, LogOut, UserPlus, LogIn } from 'lucide-react';

export const Header = () => {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <MountainSnow className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">Travel Hub</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/search" className="transition-colors hover:text-primary">
            Search
          </Link>
          {user && (
            <Link href="/my-bookings" className="transition-colors hover:text-primary">
              My Bookings
            </Link>
          )}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {user ? (
            <Button onClick={handleLogout} variant="ghost">
              <LogOut /> Logout
            </Button>
          ) : (
            <div className="space-x-2">
              <Button asChild variant="ghost">
                <Link href="/login"><LogIn /> Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup"><UserPlus /> Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
