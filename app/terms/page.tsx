import type { Metadata } from 'next';
import { LegalShell } from '../_components/LegalShell';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms governing your use of Cadence — what we agree to provide, what you agree to do, and where the limits sit.',
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" lastUpdated="May 16, 2026">
      <p>
        These terms govern your use of Cadence. Cadence is operated by the
        Cadence team (&quot;we,&quot; &quot;us&quot;). By creating an account or using the app,
        you agree to these terms. If you don&apos;t, please don&apos;t use Cadence.
      </p>

      <h2>The service</h2>
      <p>
        Cadence is a weekly planner — a way to lay out your week, share it with
        people you trust, and reflect on it. We provide the mobile apps,
        the web site, and the servers that sync your data across devices.
      </p>
      <p>
        We may add features, fix bugs, or change how parts of the app work.
        We&apos;ll try to make the experience better, not worse, and we won&apos;t remove
        core planning functionality without giving you warning.
      </p>

      <h2>Your account</h2>
      <p>
        You sign in with an email address (via a magic link), with Apple, or
        with Google. You&apos;re responsible for keeping access to the email
        address or third-party account you use to sign in. If you lose access
        there, you may lose access to your Cadence account too.
      </p>
      <p>
        You must be at least 13 years old to use Cadence. If you&apos;re between 13
        and the age of majority in your country, you confirm a parent or
        guardian agrees on your behalf.
      </p>

      <h2>Local-only mode</h2>
      <p>
        You can use Cadence without an account. Your data stays on the device
        until you choose to sign in, at which point your local cadence and
        tasks are pushed to your new account. Local data doesn&apos;t sync across
        devices and is lost if you delete the app.
      </p>

      <h2>Your content</h2>
      <p>
        You own the tasks, cadences, mood entries, and reflections you create.
        You grant us a limited license to store, process, and display that
        content solely to provide the service to you and the people you choose
        to share with. We don&apos;t sell your content. We don&apos;t train models on it.
      </p>

      <h2>Shared cadences</h2>
      <p>
        When you invite someone to a shared cadence, they can see — and
        depending on their role, edit — the tasks in that cadence. They can
        see who created and completed each task. Your mood entries and weekly
        reflections are never shared, on any cadence.
      </p>
      <p>
        When you accept an invitation, the inviter and other members can see
        your name, your avatar initials, and your activity in that cadence.
        They cannot see your email unless they are the owner.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use Cadence to harass, threaten, or harm another person.</li>
        <li>Upload content that is illegal where you live or where we operate.</li>
        <li>Try to access another user&apos;s account or data.</li>
        <li>Reverse engineer, scrape, or place automated load on the service beyond normal app use.</li>
        <li>Resell or sublicense Cadence as part of another product.</li>
      </ul>

      <h2>Pro features</h2>
      <p>
        Some features may be gated behind a paid Pro tier in the future. We&apos;ll
        be clear about what costs money before you pay for it. Free-tier
        users keep what they have; we won&apos;t move existing free features
        behind the paywall without notice.
      </p>

      <h2>Termination</h2>
      <p>
        You can delete your account at any time from the app. When you do, we
        soft-delete your data for 90 days — long enough for you to change
        your mind and sign back in to restore — then we permanently delete it.
      </p>
      <p>
        We can suspend or terminate your access if you violate these terms,
        if your account is being used to harm others, or if we&apos;re required to
        by law. We&apos;ll tell you why when we reasonably can.
      </p>

      <h2>Service availability</h2>
      <p>
        Cadence is provided as-is. We do our best to keep the service running,
        but we don&apos;t guarantee uninterrupted availability, and we&apos;re not
        liable for missed plans or data loss caused by outages.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, our liability to you for any claim
        related to Cadence is limited to what you&apos;ve paid us in the 12 months
        before the claim — or, if you&apos;ve paid nothing, to $50.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We&apos;ll update these terms from time to time. When we make a material
        change, we&apos;ll notify you in the app or by email before the change
        takes effect. Continuing to use Cadence after the change means you
        accept the updated terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the jurisdiction where
        Cadence is operated. Disputes are resolved in the courts of that
        jurisdiction.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms?{' '}
        <a href="mailto:hi@cadence.app">hi@cadence.app</a>. A person reads
        every message.
      </p>
    </LegalShell>
  );
}
