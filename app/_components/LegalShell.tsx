import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type Props = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export function LegalShell({ title, lastUpdated, children }: Props) {
  return (
    <div className="flex flex-1 flex-col">
      <header className="border-b border-hairline px-6 py-5">
        <div className="mx-auto max-w-2xl flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
          <Link href="/" aria-label="Cadence home">
            <Image
              src="/symbol.svg"
              alt="Cadence"
              width={20}
              height={26}
              className="h-6 w-auto"
            />
          </Link>
        </div>
      </header>

      <main className="flex-1 px-6 py-12 sm:py-20">
        <article className="mx-auto max-w-2xl">
          <header className="mb-10">
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              {title}
            </h1>
            <p className="mt-3 text-sm text-muted">Last updated {lastUpdated}</p>
          </header>

          <div className="prose-cadence">{children}</div>
        </article>
      </main>

      <footer className="border-t border-hairline px-6 py-8 mt-12">
        <div className="mx-auto max-w-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
          <span>© {new Date().getFullYear()} Cadence</span>
          <nav className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <a
              href="mailto:hi@cadence.app"
              className="hover:text-foreground transition-colors"
            >
              hi@cadence.app
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
