import type { Metadata } from 'next';
import { LegalShell } from '../_components/LegalShell';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'What Cadence collects, why, and who we share it with. The short answer: as little as possible, and no advertising.',
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" lastUpdated="May 16, 2026">
      <p>
        The short version: we collect what we need to make Cadence work for
        you. We don&apos;t sell your data. We don&apos;t use it to train models. We
        don&apos;t embed advertising trackers. Mood entries and weekly reflections
        are private to you, even on shared cadences.
      </p>

      <h2>What we collect</h2>

      <h3>From you, when you sign in</h3>
      <ul>
        <li><strong>Email address</strong> — used to authenticate you and send transactional emails (magic links, invitations, account notices).</li>
        <li><strong>Name</strong> — from your Apple or Google account, or derived from your email if you sign in with a magic link. Shown to people you share cadences with.</li>
        <li><strong>A provider identifier</strong> — if you sign in with Apple or Google, we store the opaque user id they give us so we recognize you on next sign-in.</li>
      </ul>

      <h3>What you create in the app</h3>
      <ul>
        <li><strong>Cadences and tasks</strong> — the names, themes, and task text you add.</li>
        <li><strong>Mood entries</strong> — one of five glyphs per day (private to you).</li>
        <li><strong>Weekly reviews</strong> — your reflections on the week (private to you).</li>
        <li><strong>Invitations you send or receive</strong> — recipient email, your relationship to the cadence, optional note.</li>
      </ul>

      <h3>Technical data</h3>
      <ul>
        <li><strong>Auth tokens</strong> — refresh tokens are hashed before we store them; the plaintext only exists on your device.</li>
        <li><strong>Email-delivery records</strong> — when we send you an email and whether it was sent successfully.</li>
        <li><strong>Crash and error reports</strong> — when the app crashes, we collect the stack trace and a user id so we can fix the bug. We do not collect your task content in crash reports.</li>
      </ul>

      <p>
        We don&apos;t place advertising trackers. We don&apos;t use analytics SDKs that
        profile you across apps or sites. We don&apos;t track your location.
      </p>

      <h2>How we use your data</h2>
      <ul>
        <li>To run the app: store your tasks, sync them across your devices, deliver invitations.</li>
        <li>To communicate about your account: sign-in links, invitations, account-closed confirmations, optional Sunday review nudges (you can turn these off in settings).</li>
        <li>To improve the app: diagnose crashes, find bugs.</li>
        <li>To enforce our terms: respond to abuse reports, comply with legal requests.</li>
      </ul>

      <h2>Who we share it with</h2>
      <p>
        We use a small number of third-party services to operate Cadence. Each
        sees only what it needs to do its job.
      </p>
      <ul>
        <li>
          <strong>Resend</strong> — our transactional email provider. Sees your
          email address and the contents of emails we send you.
        </li>
        <li>
          <strong>Sentry</strong> — error reporting, when enabled in a build.
          Sees crash stack traces and your numeric user id.
        </li>
        <li>
          <strong>Apple</strong> — only if you choose Sign In with Apple. Apple
          gives us a user identifier and (on first sign-in) your email.
        </li>
        <li>
          <strong>Google</strong> — only if you choose Sign In with Google.
          Google gives us a user identifier, your email, and your name.
        </li>
        <li>
          <strong>Our hosting provider</strong> — runs the servers that store
          the database and process requests.
        </li>
      </ul>
      <p>
        We don&apos;t sell your data to anyone. We don&apos;t share it with advertisers
        or data brokers. We&apos;ll only share it with law enforcement if we&apos;re
        legally required to and, where we can, we&apos;ll notify you first.
      </p>

      <h2>What shared-cadence members can see</h2>
      <p>
        When you join a shared cadence, the people in it can see:
      </p>
      <ul>
        <li>Your display name and avatar initials.</li>
        <li>The tasks you create in that cadence, and which tasks you mark complete.</li>
        <li>The cadence owner (only the owner) can see your email.</li>
      </ul>
      <p>
        They can&apos;t see your mood entries, your weekly reviews, tasks in other
        cadences, or your settings.
      </p>

      <h2>How long we keep your data</h2>
      <p>
        While you have an account, we keep your data so the app works. If you
        delete your account, we mark everything for deletion immediately. You
        have 90 days to change your mind and sign back in to restore — after
        that, we permanently delete it from our active systems. Backups roll
        over within 30 days of permanent deletion.
      </p>
      <p>
        Email-delivery logs are kept for 90 days for troubleshooting.
        Crash reports are kept for 90 days.
      </p>

      <h2>Your rights</h2>
      <ul>
        <li>
          <strong>Access</strong> — you can see all your data inside the app at
          any time. We&apos;ll add a one-tap export in a future release.
        </li>
        <li>
          <strong>Correction</strong> — edit your profile, tasks, cadences, and
          reflections directly in the app.
        </li>
        <li>
          <strong>Deletion</strong> — delete your account from Profile →
          Account → Delete account.
        </li>
        <li>
          <strong>Objection</strong> — email us if you want us to stop
          processing your data for a specific reason.
        </li>
      </ul>
      <p>
        If you&apos;re in a region with statutory privacy rights (GDPR, CCPA, the
        Nigerian NDPR), those rights apply. You can exercise them by emailing{' '}
        <a href="mailto:hi@cadence.app">hi@cadence.app</a>.
      </p>

      <h2>Children</h2>
      <p>
        Cadence isn&apos;t directed at children under 13. If we learn we&apos;ve
        collected data from a child under 13, we&apos;ll delete it.
      </p>

      <h2>Security</h2>
      <p>
        We use TLS for all traffic between your device and our servers. We
        hash refresh tokens before storing them. Passwords aren&apos;t stored —
        we don&apos;t use them. No system is unbreakable; we&apos;ll tell you
        promptly if your data is ever exposed in a breach.
      </p>

      <h2>International transfers</h2>
      <p>
        Cadence is operated globally. Your data may be processed in a country
        other than the one you&apos;re in. Where required, we use standard
        contractual clauses or equivalent safeguards.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We&apos;ll update this policy as the product changes. When we make a
        material change — for instance, adding a new third-party service that
        sees your data — we&apos;ll notify you in the app or by email before it
        takes effect.
      </p>

      <h2>Contact</h2>
      <p>
        Questions, complaints, or requests:{' '}
        <a href="mailto:hi@cadence.app">hi@cadence.app</a>.
      </p>
    </LegalShell>
  );
}
