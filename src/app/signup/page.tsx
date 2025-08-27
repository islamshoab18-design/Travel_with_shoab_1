import { AuthForm } from '@/components/auth/auth-form';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="container py-12 flex flex-col items-center">
      <AuthForm mode="signup" />
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link href="/login" className="underline hover:text-primary">
          Login
        </Link>
      </p>
    </div>
  );
}
