import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Blob } from './Blob';

// Replace with your actual App Store URL once published
const APP_STORE_URL = 'https://apps.apple.com/app/cue-couples/id0000000000';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=app.rork.cue';

export function JoinPage() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code') || '';
  const [copied, setCopied] = useState(false);
  const [platform, setPlatform] = useState<'ios' | 'android' | 'desktop'>('desktop');

  useEffect(() => {
    // Detect platform
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform('ios');
    } else if (/android/.test(userAgent)) {
      setPlatform('android');
    }
  }, []);

  const formatCode = (code: string) => {
    if (code.length === 6) {
      return `${code.slice(0, 3)}-${code.slice(3)}`;
    }
    return code;
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = () => {
    if (platform === 'ios') {
      window.location.href = APP_STORE_URL;
    } else if (platform === 'android') {
      window.location.href = PLAY_STORE_URL;
    } else {
      // Desktop - show App Store by default
      window.open(APP_STORE_URL, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-cue-cream font-sans text-cue-navy overflow-x-hidden selection:bg-cue-coral/20">

      {/* Navigation / Logo Area */}
      <nav className="absolute top-0 left-0 w-full p-6 md:p-10 z-50">
        <a href="/" className="text-2xl md:text-3xl font-extrabold tracking-tight text-cue-navy">
          CUE
        </a>
      </nav>

      {/* Main Content */}
      <main className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-12 overflow-hidden">

        {/* Animated Background Blobs */}
        <div className="absolute top-[10%] left-[5%] w-64 h-64 md:w-96 md:h-96 opacity-60 z-0 pointer-events-none">
          <Blob color="coral" className="w-full h-full" />
        </div>
        <div className="absolute bottom-[15%] right-[5%] w-72 h-72 md:w-[30rem] md:h-[30rem] opacity-60 z-0 pointer-events-none">
          <Blob color="sage" delay className="w-full h-full" />
        </div>

        {/* Content Card */}
        <div className="relative z-10 max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-xl shadow-cue-navy/10 p-8 md:p-12 text-center">

            {/* Heart Icon */}
            <div className="w-20 h-20 bg-cue-coral/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-cue-coral" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-cue-navy">
              You're invited to CUE
            </h1>

            <p className="text-lg text-cue-navy/70 mb-8 leading-relaxed">
              Someone special wants to connect with you on CUE — the app that helps couples work through conflicts together.
            </p>

            {/* Invite Code Display */}
            {code && (
              <div className="mb-8">
                <p className="text-sm font-semibold text-cue-navy/50 uppercase tracking-wider mb-3">
                  Your invite code
                </p>
                <button
                  onClick={handleCopyCode}
                  className="bg-cue-cream px-8 py-4 rounded-2xl inline-block hover:bg-cue-sage/10 transition-colors cursor-pointer"
                >
                  <span className="text-3xl font-bold text-cue-coral tracking-widest">
                    {formatCode(code)}
                  </span>
                  <p className="text-xs text-cue-navy/50 mt-2">
                    {copied ? 'Copied!' : 'Tap to copy'}
                  </p>
                </button>
              </div>
            )}

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-full bg-cue-navy text-white font-bold text-lg py-4 px-8 rounded-2xl hover:bg-cue-navy/90 transition-colors mb-4"
            >
              {platform === 'ios' ? 'Download on App Store' :
               platform === 'android' ? 'Get it on Google Play' :
               'Download the App'}
            </button>

            {/* Instructions */}
            <div className="text-left bg-cue-cream/50 rounded-xl p-5 mt-6">
              <p className="text-sm font-semibold text-cue-navy mb-3">How to join:</p>
              <ol className="text-sm text-cue-navy/70 space-y-2">
                <li className="flex gap-3">
                  <span className="bg-cue-coral text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                  <span>Download CUE from the App Store</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-cue-coral text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                  <span>Open the app and tap "Join partner"</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-cue-coral text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                  <span>Enter the code: <strong className="text-cue-coral">{formatCode(code)}</strong></span>
                </li>
              </ol>
            </div>

          </div>

          {/* Footer Note */}
          <p className="text-center text-sm text-cue-navy/50 mt-6">
            Code expires in 24 hours
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-cue-cream border-t border-cue-navy/10 py-8 px-6">
        <div className="max-w-md mx-auto flex flex-col items-center gap-4">
          <div className="flex gap-6 text-sm font-semibold text-cue-navy/60">
            <a href="/privacy" className="hover:text-cue-coral transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-cue-coral transition-colors">Terms</a>
            <a href="mailto:hello@cueapp.co" className="hover:text-cue-coral transition-colors">Contact</a>
          </div>
          <div className="text-xs text-cue-navy/40">
            © 2025 CUE. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
