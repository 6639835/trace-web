import type { Metadata } from 'next';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Trace terms of service. Usage terms, intellectual property, limitations of liability, and user responsibilities for the iOS network debugger.',
  keywords: ['Trace terms', 'terms of service', 'usage terms', 'legal'],
  openGraph: {
    title: 'Terms of Service - Trace',
    description: 'Terms of service for Trace iOS network debugger.',
    url: 'https://trace.justinl.site/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <FileText className="mx-auto mb-4 h-10 w-10 text-muted-foreground sm:mb-6 sm:h-12 sm:w-12" />
          <h1 className="mb-3 text-center text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
            Terms of Service
          </h1>
          <p className="mb-6 text-center text-sm text-muted-foreground">
            Last updated: January 30, 2026
          </p>
        </div>
      </section>

      <Separator />

      <section className="container py-section">
        <div className="mx-auto prose max-w-readable prose-slate dark:prose-invert">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using Trace, you agree to these Terms of Service. If you
            do not agree, do not use Trace.
          </p>

          <h2>2. Service Description</h2>
          <p>
            Trace is an open-source iOS network debugging tool that captures and inspects HTTP(S)
            traffic, WebSocket connections, and related network activity. The software is provided
            &quot;as is&quot; without warranty of any kind.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Use Trace only for legitimate debugging and development purposes</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Respect the privacy and security of others</li>
            <li>
              Not use Trace to intercept traffic from applications you do not own or have permission
              to debug
            </li>
            <li>Not attempt to circumvent security measures of third-party services</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            Trace is open source software licensed under the MIT License. You may use, modify, and
            distribute the source code subject to the terms of the MIT License. The Trace name and
            logo are property of the project maintainers.
          </p>

          <h2>5. Limitations of Liability</h2>
          <p>
            Trace is provided without warranty. The developers are not liable for any damages
            arising from use of the software, including but not limited to data loss, security
            breaches, or service interruptions.
          </p>

          <h2>6. Privacy</h2>
          <p>
            Trace operates entirely on-device and collects no user data or telemetry. See our{' '}
            <Link href="/privacy">Privacy Policy</Link> for details.
          </p>

          <h2>7. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of Trace after
            changes constitutes acceptance of the modified terms.
          </p>

          <h2>8. Open Source Specific</h2>
          <p>
            As open source software, you may fork, modify, and distribute Trace under the MIT
            License terms. Commercial use is permitted. Attribution to the original project is
            appreciated but not required.
          </p>

          <h2>9. Termination</h2>
          <p>
            You may stop using Trace at any time by deleting the app. We reserve the right to deny
            service access (including TestFlight builds) for violations of these terms.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these terms? Contact us via{' '}
            <a
              href="https://github.com/Trace-iOS/Trace/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub Issues
            </a>{' '}
            or email{' '}
            <a href="mailto:epa6643@gmail.com" className="text-primary hover:underline">
              epa6643@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
