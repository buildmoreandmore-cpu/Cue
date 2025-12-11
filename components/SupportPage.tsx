import React from 'react';

export function SupportPage() {
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
        <h1 className="text-4xl font-bold mb-8">Support</h1>

        {/* Contact Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg shadow-cue-navy/5 mb-10">
          <h2 className="text-2xl font-bold text-cue-navy mb-4">Need help with CUE?</h2>
          <p className="text-lg text-cue-navy/70 mb-4">Contact us:</p>
          <a
            href="mailto:buildmoreandmore@gmail.com"
            className="text-xl font-semibold text-cue-coral hover:underline"
          >
            buildmoreandmore@gmail.com
          </a>
          <p className="text-sm text-cue-navy/50 mt-2">We typically respond within 24 hours.</p>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold text-cue-navy mb-6">Common Questions</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-cue-navy mb-2">How do I invite my partner?</h3>
              <p className="text-cue-navy/70">
                Tap "Invite Partner" from the home screen and share the link via text or any messaging app. Your partner will receive a code to connect with you.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-cue-navy mb-2">The app isn't syncing</h3>
              <p className="text-cue-navy/70">
                Make sure both phones have an internet connection. Try closing and reopening CUE. If the issue persists, try logging out and back in.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-cue-navy mb-2">How do I delete my account?</h3>
              <p className="text-cue-navy/70">
                Go to Settings &gt; Delete Account. This will permanently remove all your data from our servers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-cue-navy mb-2">Is my data private?</h3>
              <p className="text-cue-navy/70">
                Yes. Your check-ins and conversations are encrypted and only visible to you and your connected partner. We never sell your data. See our <a href="/privacy" className="text-cue-coral hover:underline">Privacy Policy</a> for details.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-cue-navy mb-2">Can I use CUE without a partner?</h3>
              <p className="text-cue-navy/70">
                Yes! Solo mode lets you track your mood, practice breathing exercises, and build self-awareness. You can invite a partner anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="mt-12 pt-8 border-t border-cue-navy/10">
          <div className="flex flex-wrap gap-6 text-sm font-semibold">
            <a href="/privacy" className="text-cue-coral hover:underline">Privacy Policy</a>
            <a href="/terms" className="text-cue-coral hover:underline">Terms of Service</a>
            <a href="mailto:buildmoreandmore@gmail.com" className="text-cue-coral hover:underline">Email Support</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-cue-cream border-t border-cue-navy/10 py-8 px-6 mt-12">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-extrabold text-cue-navy">CUE</div>
          <div className="flex gap-6 text-sm font-semibold text-cue-navy/60">
            <a href="/privacy" className="hover:text-cue-coral transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-cue-coral transition-colors">Terms</a>
            <a href="/support" className="text-cue-coral">Support</a>
          </div>
          <div className="text-sm text-cue-navy/40">
            © 2025 CUE
          </div>
        </div>
      </footer>
    </div>
  );
}
