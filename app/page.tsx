'use client';

import { useEffect, useMemo } from 'react';

const DAY_NAMES = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const DAY_SHORT = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

// Decorative counts (the page isn't pulling real task data).
const HERO_COUNTS = ['3', '2', '5', '4', '1', '0', 'review'];
const PHONE_COUNTS = ['3', '2', '5', '4', '1', '—', '·'];

function startOfWeekMonday(d: Date): Date {
  const day = d.getDay(); // 0 Sun … 6 Sat
  const diff = day === 0 ? -6 : 1 - day;
  const monday = new Date(d);
  monday.setHours(0, 0, 0, 0);
  monday.setDate(d.getDate() + diff);
  return monday;
}

function dayIndexFromMonday(d: Date): number {
  const day = d.getDay();
  return day === 0 ? 6 : day - 1;
}

function formatShortDate(d: Date): string {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function isoWeek(date: Date): number {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(
    ((d.getTime() - yearStart.getTime()) / 86_400_000 + 1) / 7,
  );
}

type Day = {
  name: string;
  short: string;
  date: Date;
  formatted: string;
  isToday: boolean;
};

function useThisWeek(): { days: Day[]; todayIndex: number; weekNumber: number } {
  return useMemo(() => {
    const now = new Date();
    const monday = startOfWeekMonday(now);
    const todayIndex = dayIndexFromMonday(now);
    const weekNumber = isoWeek(now);
    const days = DAY_NAMES.map((name, i) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      return {
        name,
        short: DAY_SHORT[i],
        date: d,
        formatted: formatShortDate(d),
        isToday: i === todayIndex,
      };
    });
    return { days, todayIndex, weekNumber };
  }, []);
}

export default function Home() {
  const { days, todayIndex, weekNumber } = useThisWeek();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );

    document.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 60}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <>
      <SiteNav />
      <Hero days={days} />
      <UnitSection todayIndex={todayIndex} />
      <Divider />
      <PrinciplesSection />
      <StatementSection />
      <SharingSection />
      <RejectedSection />
      <SundaySection weekNumber={weekNumber} />
      <CtaSection />
      <SiteFooter />
    </>
  );
}

/* ─────────────────────────── NAV ─────────────────────────── */

function SiteNav() {
  return (
    <nav className="site-nav">
      <div className="nav-mark">
        <BrandSvg />
        <span className="wm">cadence</span>
      </div>
      <div className="nav-links">
        <a href="#unit" className="hide-mobile">The week</a>
        <a href="#sharing" className="hide-mobile">Sharing</a>
        <a href="#sunday" className="hide-mobile">Sunday</a>
        <a href="#start">Open the app</a>
      </div>
    </nav>
  );
}

/* ─────────────────────────── HERO ────────────────────────── */

function Hero({ days }: { days: Day[] }) {
  return (
    <header className="hero" aria-label="The week, one glance">
      {days.map((d, i) => (
        <div key={d.name} className="band">
          <span className="band-day">
            {d.isToday && <span className="today-dot" aria-hidden="true" />}
            {d.name}
          </span>
          <span className="band-meta" suppressHydrationWarning>
            {bandMeta(d, i, days.length)}
          </span>
        </div>
      ))}

      <div className="hero-tagline">
        <span className="eyebrow">A quiet weekly planner</span>
        <span className="scroll-cue">Scroll</span>
      </div>
    </header>
  );
}

function bandMeta(d: Day, i: number, total: number): string {
  // Sunday slot reads "review" instead of a count.
  if (i === total - 1) return `${d.formatted} · review`;
  if (d.isToday) return `Today · ${HERO_COUNTS[i]}`;
  return `${d.formatted} · ${HERO_COUNTS[i]}`;
}

/* ─────────────────────────── UNIT ────────────────────────── */

function UnitSection({ todayIndex }: { todayIndex: number }) {
  return (
    <section className="block" id="unit">
      <div className="unit">
        <div>
          <div className="eyebrow reveal">Idea 01</div>
          <h2 className="section-h2 reveal">The week is the unit.</h2>
          <p className="lede reveal">
            Not the day. Not the inbox. Your whole week lives in a single
            object — seven equal bands, always visible, always proportional.
            Empty Sunday gets the same room as packed Monday. Tap to expand,
            swipe to switch cadences. Nothing more to learn.
          </p>
        </div>
        <div className="reveal">
          <div className="phone-mock">
            <div className="phone-stack-pill">Work · 3</div>
            <div className="phone-screen">
              {DAY_SHORT.map((short, i) => (
                <div key={short} className="phone-band">
                  <span className="phone-day">
                    {i === todayIndex && <span className="dot" />}
                    {short}
                  </span>
                  <span className="phone-count">{PHONE_COUNTS[i]}</span>
                </div>
              ))}
            </div>
            <div className="phone-fabs">
              <div className="phone-fab">≡</div>
              <div className="phone-fab teal">+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PRINCIPLES ──────────────────── */

function Divider() {
  return <div className="divider" />;
}

function PrinciplesSection() {
  return (
    <section className="block">
      <div className="eyebrow reveal">What we believe</div>
      <h2 className="section-h2 wide reveal">
        Three rules. Everything else follows.
      </h2>

      <div className="principles">
        <Principle
          number="01"
          title="The week is one object."
          body="Seven bands, equal heights, always on screen. The shape of your week shouldn't move just because Tuesday got busy."
        />
        <Principle
          number="02"
          title="Light weeks are not lazy weeks."
          body={
            <>No streaks. No fire emojis. No &quot;you missed a day.&quot; Some weeks are quiet. The app knows the difference and doesn&apos;t ask you to apologise.</>
          }
        />
        <Principle
          number="03"
          title="Plan together, reflect alone."
          body="Share a cadence with your partner, your team, your housemates. Your mood and your Sunday review stay yours — even on shared boards."
        />
      </div>
    </section>
  );
}

function Principle({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="principle reveal">
      <span className="number">{number}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

/* ─────────────────────────── STATEMENT ───────────────────── */

function StatementSection() {
  return (
    <section className="statement">
      <div className="statement-inner">
        <div className="eyebrow reveal" style={{ color: 'rgba(250, 248, 243, 0.55)' }}>
          Voice
        </div>
        <h2 className="section-h2 reveal">
          Your week, <span className="accent">one glance</span>.
        </h2>
        <p className="lede reveal">
          Cadence doesn&apos;t tell you what to plan. It doesn&apos;t suggest. It
          doesn&apos;t nudge. It holds the week steady so you can think.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────── SHARING SPLIT ───────────────── */

function SharingSection() {
  return (
    <section className="block" id="sharing">
      <div className="eyebrow reveal">Idea 02</div>
      <h2 className="section-h2 wide reveal">
        Shared cadences. Private reflection.
      </h2>
      <p className="lede reveal">
        Tasks, completions, and presence are shared with everyone on a cadence.
        Mood and weekly reviews are not — by design, and forever. This is the
        trust contract.
      </p>

      <div className="split reveal">
        <div className="split-cell">
          <div className="tag">Shared</div>
          <h4>What everyone sees</h4>
          <p>The things that need coordination. Equal access, equal weight.</p>
          <ul>
            <li>Tasks and who added them</li>
            <li>Completion state and timestamps</li>
            <li>Member presence on the cadence</li>
            <li>Stack name, theme, member list</li>
          </ul>
        </div>
        <div className="split-cell private">
          <div className="tag private">Yours alone</div>
          <h4>What never syncs</h4>
          <p>
            The things that need protecting. Yours forever, on any device, on
            any cadence.
          </p>
          <ul>
            <li>Mood check-ins at day-complete</li>
            <li>Sunday weekly reviews</li>
            <li>Reflection prompts and answers</li>
            <li>Notification preferences</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── REJECTED ────────────────────── */

const REJECTED: Array<{ what: string; why: string }> = [
  { what: 'Streaks and gamification', why: "Trains anxiety. Penalises life events. Cadence isn't a game." },
  { what: 'Push notifications by default', why: 'Opt-in only, after meaningful use. Cadence is calm out of the box.' },
  { what: '"We miss you" emails', why: 'Re-engagement nags are a retention bandaid. Fix the product instead.' },
  { what: 'AI suggestions and prompts', why: "The app doesn't tell you what to plan. You tell it." },
  { what: 'Tracking pixels in email', why: "Trust costs nothing. We don't measure email opens." },
  { what: 'Onboarding tours with arrows', why: 'One single hint card on first cadence view. Nothing else.' },
];

function RejectedSection() {
  return (
    <section className="statement rejected-section">
      <div className="statement-inner">
        <div className="eyebrow reveal">Deliberately missing</div>
        <h2 className="section-h2 wide reveal">Some things we won&apos;t ship.</h2>
        <p className="lede reveal">
          Defending the absences is as important as defending the features.
          Here&apos;s what we said no to, and why.
        </p>

        <div className="rejected-list">
          {REJECTED.map((row, i) => (
            <div key={row.what} className="rejected-row reveal">
              <div className="rejected-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="rejected-what">{row.what}</div>
              <div className="rejected-why">{row.why}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SUNDAY ──────────────────────── */

function SundaySection({ weekNumber }: { weekNumber: number }) {
  return (
    <section className="block" id="sunday">
      <div className="sunday">
        <div>
          <div className="eyebrow reveal">Idea 03</div>
          <h2 className="section-h2 reveal">Sundays are for looking back.</h2>
          <p className="lede reveal">
            One quiet route, available only on Sundays. Three prompts, open
            text, never seen by anyone else. If your week was quiet, the
            language is too — no stats theatre, no guilt trip.
          </p>
        </div>
        <div className="reveal">
          <div className="sunday-card">
            <div className="label" suppressHydrationWarning>
              Sunday · Week {weekNumber}
            </div>
            <div className="sunday-quiet">This week was a quiet one.</div>
            <p>
              That&apos;s not nothing. Four tasks done, three carried over. The
              shape of a quiet week is its own kind of progress.
            </p>
            <div className="sunday-prompts">
              <div className="prompt">
                <span className="prompt-num">01</span>
                <span>What landed, even if it wasn&apos;t on the list?</span>
              </div>
              <div className="prompt">
                <span className="prompt-num">02</span>
                <span>What&apos;s one thing you&apos;d like to leave behind in this week?</span>
              </div>
              <div className="prompt">
                <span className="prompt-num">03</span>
                <span>What does next week want to be?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CTA ─────────────────────────── */

function CtaSection() {
  return (
    <section className="cta-section" id="start">
      <h2 className="section-h2 reveal">
        Start your week
        <span className="teal-mark" aria-hidden="true" />
      </h2>
      <p className="lede reveal">
        No account needed. The first sixty seconds are using the app, not
        signing into it.
      </p>
      <div className="cta-buttons reveal">
        <a href="#" className="btn btn-primary">Open Cadence →</a>
        <a href="#" className="btn btn-secondary">I have an account</a>
        <span className="btn-skip-note">
          Keep it on this device, sign in later — or never.
        </span>
      </div>
    </section>
  );
}

/* ─────────────────────────── FOOTER ──────────────────────── */

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <div className="footer-mark">
          <BrandSvg />
          <span className="wm">cadence</span>
        </div>
        <p className="footer-tag">
          A weekly planner that respects your time. Plan with anyone. Reflect
          alone.
        </p>
      </div>
      <div className="footer-links">
        <a href="#">iOS</a>
        <a href="#">Android</a>
        <a href="#">Web</a>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
      </div>
      <div className="footer-colophon">
        <span suppressHydrationWarning>
          © {new Date().getFullYear()} Cadence. Made quietly.
        </span>
        <span>No trackers. No retention nags. No streaks.</span>
      </div>
    </footer>
  );
}

/* ─────────────────────────── BRAND SVG ───────────────────── */

function BrandSvg() {
  return (
    <svg viewBox="0 0 120.78 149.9" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.64,28.31c4.53-6.49,10.08-12.32,16.64-17.49,3.32-2.61,6.89-5.04,10.73-7.29l.03-.04v-1.11c0-1.67-1.82-2.71-3.26-1.87-12.53,7.31-22.55,16.98-30.06,29.02C4.41,42.83.16,57.56,0,73.71c-.1,8.68,1,17.16,3.28,25.42,2.27,8.26,5.59,15.86,9.95,22.8,4.36,6.95,9.76,13.16,16.22,18.67,4.16,3.49,8.63,6.51,13.41,9.05,1.44.77,3.19-.28,3.19-1.92h0c0-.8-.44-1.52-1.14-1.9-2.87-1.56-5.71-3.32-8.5-5.29-6.79-4.86-12.53-10.76-17.27-17.7-4.72-6.95-8.35-14.57-10.86-22.87-2.52-8.31-3.73-17-3.64-26.09.09-8.44,1.31-16.53,3.67-24.25,2.35-7.72,5.8-14.83,10.34-21.32Z"
      />
      <path
        fill="currentColor"
        d="M118.41,120.72c1.77-.25,3.02,1.73,2.01,3.2-3.15,4.54-6.71,8.46-10.69,11.73-9.63,7.93-21.41,11.9-35.31,11.9-16.25,0-29.71-5.33-40.37-16.01-4.57-4.65-8.4-9.91-11.5-15.8-3.11-5.89-5.48-12.36-7.14-19.39-1.65-7.03-2.47-14.27-2.47-21.68,0-13.8,2.86-26.41,8.59-37.86,5.73-11.44,13.62-20.43,23.69-26.99,2.24-1.46,4.54-2.75,6.89-3.89,1.34-.65,2.7-1.25,4.08-1.78,7.02-2.77,14.5-4.16,22.43-4.16,3.41,0,7.53.4,12.37,1.19,1,.16,1.72,1.03,1.72,2.04v2.95l-.14.02c-3.57-1.23-7.57-1.83-11.99-1.83-6.72,0-13,1.56-18.81,4.68-5.81,3.12-10.86,7.52-15.14,13.21-4.27,5.68-7.6,12.41-9.96,20.17-2.36,7.77-3.55,16.12-3.55,25.06,0,13.52,2.19,25.84,6.59,36.97,4.38,11.13,10.42,19.86,18.09,26.21,7.67,6.34,16.17,9.51,25.53,9.51,6.44,0,12.47-1.53,18.09-4.58,5.61-3.05,10.62-7.45,15-13.21.21-.27.42-.55.62-.83.33-.45.83-.76,1.39-.84h0Z"
      />
      <circle fill="#4ECDC4" cx={95.01} cy={109.17} r={19.56} />
    </svg>
  );
}
