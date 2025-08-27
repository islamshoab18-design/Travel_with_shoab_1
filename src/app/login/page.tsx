import { AuthForm } from '@/components/auth/auth-form';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="container py-12 flex flex-col items-center">
      <AuthForm mode="login" />
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="underline hover:text-primary">
          Sign up
        </Link>
      </p>
    </div>
  );
}
