import Link from 'next/link';
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  CheckCircle2,
  LayoutPanelTop,
} from 'lucide-react';
import { Space_Grotesk, Source_Serif_4 } from 'next/font/google';
import styles from './demo.module.css';

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--demo-font-sans',
  weight: ['400', '500', '700'],
});

const serif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--demo-font-serif',
  weight: ['400', '600', '700'],
});

const principles = [
  {
    title: 'Single promise, stated fast',
    description:
      'Large product teams usually open with one concrete line. No manifesto, no vague future language.',
  },
  {
    title: 'Proof near the fold',
    description:
      'You usually see metrics, product UI, customer logos, or outcomes in the first viewport before scrolling.',
  },
  {
    title: 'Visual consistency over decoration',
    description:
      'They pick one type system, one spacing rhythm, and one color direction then keep it consistent.',
  },
  {
    title: 'Clear CTA hierarchy',
    description:
      'One primary action, one secondary action, and minimal choice overload. It makes decisions easier.',
  },
];

const highlights = [
  {
    label: 'Sessions inspected',
    value: '50k+',
  },
  {
    label: 'Median processing',
    value: '50 ms',
  },
  {
    label: 'Traffic protocols',
    value: 'HTTP, WS, SSE',
  },
];

const events = [
  {
    service: 'iOS App',
    method: 'POST /v2/login',
    status: '200',
    time: '08:42:11',
  },
  {
    service: 'Payments',
    method: 'GET /v1/balance',
    status: '401',
    time: '08:42:13',
  },
  {
    service: 'Realtime',
    method: 'WS /events',
    status: 'OPEN',
    time: '08:42:17',
  },
  {
    service: 'Search',
    method: 'GET /v1/query',
    status: '200',
    time: '08:42:19',
  },
];

export default function DemoPage() {
  return (
    <div className={`${styles['demoRoot']} ${grotesk.variable} ${serif.variable}`}>
      <div className="mx-auto max-w-6xl px-5 pt-10 pb-20 sm:px-8 md:px-10 md:pt-14">
        <header
          className={`${styles['revealOne']} mb-8 flex items-center justify-between md:mb-12`}
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-[var(--demo-muted)] uppercase">
            Demo Landing Direction
          </p>
          <Link href="/" className={styles['inlineLink']}>
            Back to current homepage
          </Link>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className={styles['revealTwo']}>
            <p className="mb-4 inline-flex rounded-full border border-[var(--demo-border)] bg-[var(--demo-card)] px-3 py-1 text-xs font-semibold tracking-[0.12em] text-[var(--demo-muted)] uppercase">
              Not AI feeling | Product-led
            </p>
            <h1 className="max-w-[18ch] text-4xl leading-[1.05] font-bold tracking-tight text-[var(--demo-ink)] sm:text-5xl md:text-6xl">
              A network debugger that looks like
              <span className={styles['serifAccent']}> a serious product site.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--demo-muted)] sm:text-lg">
              This demo follows patterns common on strong company websites: tight messaging, visible
              proof, clean hierarchy, and a visual system that feels intentional.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/features" className={styles['primaryButton']}>
                Explore feature story
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/docs" className={styles['secondaryButton']}>
                Open docs
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className={styles['metricCard']}>
                  <p className="text-xl font-semibold text-[var(--demo-ink)]">{item.value}</p>
                  <p className="text-xs tracking-wide text-[var(--demo-muted)] uppercase">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className={`${styles['revealThree']} ${styles['productPanel']}`}>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-semibold tracking-wide text-[var(--demo-ink)] uppercase">
                Live session stream
              </p>
              <span className="rounded-full bg-[var(--demo-accent-soft)] px-2 py-1 text-xs font-semibold text-[var(--demo-accent-strong)]">
                Recording
              </span>
            </div>
            <div className="space-y-2">
              {events.map((event) => (
                <div key={`${event.service}-${event.time}`} className={styles['logRow']}>
                  <p className="font-medium text-[var(--demo-ink)]">{event.service}</p>
                  <p className="text-[var(--demo-muted)]">{event.method}</p>
                  <p className="text-[var(--demo-ink)]">{event.status}</p>
                  <p className="text-[var(--demo-muted)]">{event.time}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className={`${styles['revealFour']} mt-16 md:mt-24`}>
          <div className={styles['sectionHeading']}>
            <h2>What bigger product websites usually do well</h2>
            <p>
              They optimize for confidence, not decoration. The page proves utility quickly and
              removes friction from the next action.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <article key={principle.title} className={styles['principleCard']}>
                <CheckCircle2 className="h-4 w-4 text-[var(--demo-accent-strong)]" />
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles['revealFive']} mt-16 grid gap-4 md:mt-24 md:grid-cols-3`}>
          <article className={styles['infoCard']}>
            <LayoutPanelTop className="h-5 w-5 text-[var(--demo-accent-strong)]" />
            <h3>Focused narrative</h3>
            <p>
              Each section has one job: explain value, prove performance, or drive a specific next
              click.
            </p>
          </article>
          <article className={styles['infoCard']}>
            <ChartNoAxesColumnIncreasing className="h-5 w-5 text-[var(--demo-accent-strong)]" />
            <h3>Outcome-first language</h3>
            <p>
              Replace generic claims with real outcomes, numbers, and examples from the product
              itself.
            </p>
          </article>
          <article className={styles['infoCard']}>
            <CheckCircle2 className="h-5 w-5 text-[var(--demo-accent-strong)]" />
            <h3>Design discipline</h3>
            <p>
              Typographic contrast, spacing rhythm, and restrained motion do more than heavy visual
              effects.
            </p>
          </article>
        </section>

        <section className={`${styles['revealSix']} mt-16 md:mt-24`}>
          <div className={styles['ctaBand']}>
            <h2>Use this as a direction, then adapt it to your brand voice.</h2>
            <p>
              If this tone fits, I can next convert your actual homepage content into this design
              system section by section.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/" className={styles['primaryButton']}>
                Apply style to homepage
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/about" className={styles['secondaryButton']}>
                Compare with current pages
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
