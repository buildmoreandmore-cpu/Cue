import React from 'react';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cue-cream font-sans text-cue-navy">
      {/* Navigation */}
      <nav className="bg-cue-cream border-b border-cue-navy/10 p-6">
        <a href="/" className="text-2xl font-extrabold tracking-tight text-cue-navy">
          CUE
        </a>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-cue-navy/60 mb-8">Last Updated: December 2024</p>

        <div className="prose prose-lg text-cue-navy/80 space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">Introduction</h2>
            <p>
              CUE ("we," "our," or "us") operates the CUE mobile application (the "App").
              This Privacy Policy informs you of our policies regarding the collection, use,
              and disclosure of personal information when you use our App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">Contact Information</h2>
            <p><strong>Developer:</strong> CUE App</p>
            <p><strong>Email:</strong> <a href="mailto:hello@cueapp.co" className="text-cue-coral hover:underline">hello@cueapp.co</a></p>
            <p><strong>Website:</strong> <a href="https://cueapp.co" className="text-cue-coral hover:underline">https://cueapp.co</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-cue-navy mb-2">Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information (name, email) when you create an account</li>
              <li>Partner connection codes for pairing with your partner</li>
              <li>Check-in data and mood tracking information you voluntarily enter</li>
              <li>Session data during conflict resolution exercises</li>
            </ul>

            <h3 className="text-xl font-semibold text-cue-navy mb-2 mt-4">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device type and operating system version</li>
              <li>App usage patterns to improve our service</li>
              <li>Push notification tokens (if you enable notifications)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">How We Use Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain the App's core functionality</li>
              <li>Connect you with your partner through invite codes</li>
              <li>Send you notifications about partner activity (with your consent)</li>
              <li>Improve and personalize your experience</li>
              <li>Respond to your inquiries and support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">Data Storage</h2>
            <p>
              Your data is stored securely using industry-standard encryption. We use Supabase
              as our backend service provider, which maintains SOC 2 Type II compliance and
              implements robust security measures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Supabase</strong> - Database and authentication services</li>
              <li><strong>Expo</strong> - Push notification delivery</li>
            </ul>
            <p className="mt-2">
              These services have their own privacy policies governing their use of your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide
              you services. You may request deletion of your account and associated data at any
              time by contacting us or using the account deletion feature in the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent for data processing</li>
              <li>Export your data in a portable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">Children's Privacy</h2>
            <p>
              This app is not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13. If you are a parent or guardian
              and believe your child has provided us with personal information, please contact us
              so we can take appropriate action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page and updating the "Last Updated"
              date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:hello@cueapp.co" className="text-cue-coral hover:underline">hello@cueapp.co</a>.
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-cue-cream border-t border-cue-navy/10 py-8 px-6 mt-12">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-extrabold text-cue-navy">CUE</div>
          <div className="flex gap-6 text-sm font-semibold text-cue-navy/60">
            <a href="/privacy" className="text-cue-coral">Privacy Policy</a>
            <a href="/terms" className="hover:text-cue-coral transition-colors">Terms</a>
            <a href="mailto:hello@cueapp.co" className="hover:text-cue-coral transition-colors">Contact</a>
          </div>
          <div className="text-sm text-cue-navy/40">
            © 2025 CUE
          </div>
        </div>
      </footer>
    </div>
  );
}
