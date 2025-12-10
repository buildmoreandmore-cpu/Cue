import React, { useState } from 'react';
import { EmailFormProps } from '../types';

export const EmailForm: React.FC<EmailFormProps> = ({ location }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      // Mock success for any email containing '@'
      if (email.includes('@')) {
        setStatus('success');
        // Track valid signup
        if ((window as any).plausible) {
          (window as any).plausible('Signup', { props: { location } });
        }
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className={`rounded-xl bg-cue-white border-2 border-cue-sage/20 p-6 text-center shadow-lg animate-fade-in-up ${location === 'footer' ? 'max-w-md mx-auto' : 'max-w-sm'}`}>
        <p className="text-xl mb-2">You're on the list! 💛</p>
        <p className="text-cue-navy/70 text-sm">We'll email you when CUE is ready.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 w-full ${location === 'footer' ? 'max-w-md mx-auto' : 'max-w-md'}`}>
      <div className="flex-grow relative">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className={`w-full px-5 py-4 rounded-xl bg-white border-2 text-cue-navy placeholder-cue-navy/40 outline-none transition-all
            ${status === 'error' ? 'border-red-400 bg-red-50' : 'border-transparent focus:border-cue-sage/50 hover:border-cue-sage/30'}
          `}
        />
        {status === 'error' && (
          <span className="absolute -bottom-6 left-2 text-xs text-red-500 font-semibold">
            Please enter a valid email address.
          </span>
        )}
      </div>
      
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-8 py-4 rounded-xl bg-cue-coral text-white font-bold transition-all hover:bg-[#d66a4e] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap active:scale-95"
      >
        {status === 'loading' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Joining...
          </span>
        ) : (
          'Join the waitlist'
        )}
      </button>
    </form>
  );
};