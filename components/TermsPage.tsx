import React from 'react';

export function TermsPage() {
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
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-cue-navy/60 mb-8">Last Updated: December 2024</p>

        <div className="prose prose-lg text-cue-navy/80 space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the CUE mobile application ("App"), you agree
              to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms,
              do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">2. Description of Service</h2>
            <p>
              CUE is a relationship communication app designed to help couples work through
              conflicts together. The App provides features including daily check-ins, guided
              breathing exercises, conflict resolution tools, and partner connection capabilities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">3. User Accounts</h2>
            <p>
              To use certain features of the App, you may need to create an account. You are
              responsible for maintaining the confidentiality of your account credentials and for
              all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">4. Partner Connection</h2>
            <p>
              The App allows you to connect with a partner using invite codes. By connecting
              with a partner, you consent to sharing certain information (such as check-in status
              and session participation) with them through the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the App for any unlawful purpose</li>
              <li>Share your account credentials with others</li>
              <li>Attempt to gain unauthorized access to the App or its systems</li>
              <li>Interfere with or disrupt the App's functionality</li>
              <li>Use the App to harass, abuse, or harm others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">6. Not a Substitute for Professional Help</h2>
            <p>
              <strong>Important:</strong> CUE is not a substitute for professional mental health
              services, therapy, or counseling. The App is designed as a communication tool and
              should not be used to address serious relationship issues, mental health concerns,
              or domestic violence situations. If you are in crisis, please contact a mental
              health professional or emergency services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">7. Intellectual Property</h2>
            <p>
              The App and its original content, features, and functionality are owned by CUE and
              are protected by international copyright, trademark, and other intellectual property
              laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">8. Disclaimer of Warranties</h2>
            <p>
              The App is provided "as is" and "as available" without warranties of any kind,
              either express or implied. We do not warrant that the App will be uninterrupted,
              error-free, or completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, CUE shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or
              revenues, whether incurred directly or indirectly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">10. Account Deletion</h2>
            <p>
              You may delete your account at any time through the App settings. Upon deletion,
              your personal data will be removed from our systems in accordance with our
              Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any
              changes by posting the new Terms on this page and updating the "Last Updated" date.
              Your continued use of the App after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cue-navy mb-4">12. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:buildmoreandmore@gmail.com" className="text-cue-coral hover:underline">buildmoreandmore@gmail.com</a>.
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-cue-cream border-t border-cue-navy/10 py-8 px-6 mt-12">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-extrabold text-cue-navy">CUE</div>
          <div className="flex gap-6 text-sm font-semibold text-cue-navy/60">
            <a href="/privacy" className="hover:text-cue-coral transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-cue-coral">Terms</a>
            <a href="mailto:buildmoreandmore@gmail.com" className="hover:text-cue-coral transition-colors">Contact</a>
          </div>
          <div className="text-sm text-cue-navy/40">
            © 2025 CUE
          </div>
        </div>
      </footer>
    </div>
  );
}
