import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EmailLinkProps {
  email: string;
  className?: string;
}

export function EmailLink({ email, className }: EmailLinkProps) {
  return (
    <a
      href={`mailto:${email}`}
      className={cn(
        'inline-flex items-center gap-2 rounded-md border bg-card px-3 py-2 text-sm text-muted-foreground shadow-sm transition-colors hover:border-primary/50 hover:text-foreground dark:shadow-none',
        className,
      )}
    >
      <Mail className="h-4 w-4 shrink-0 text-primary" />
      {email}
    </a>
  );
}
