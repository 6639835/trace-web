import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  children,
  className,
  titleClassName,
}: FeatureCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        {Icon && <Icon className="mb-2 h-8 w-8 text-primary" />}
        <CardTitle className={titleClassName}>{title}</CardTitle>
      </CardHeader>
      {(description || children) && (
        <CardContent>
          {description && (
            <CardDescription className="leading-relaxed">{description}</CardDescription>
          )}
          {children}
        </CardContent>
      )}
    </Card>
  );
}
