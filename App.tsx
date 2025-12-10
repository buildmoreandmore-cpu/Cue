import React from 'react';
import { Blob } from './components/Blob';
import { EmailForm } from './components/EmailForm';
import { PhoneMockup } from './components/PhoneMockup';
import { FeatureCardProps } from './types';

// Icons
const ConnectIcon = () => (
  <svg className="w-8 h-8 text-cue-coral" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const UnderstandIcon = () => (
  <svg className="w-8 h-8 text-cue-sage" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
  </svg>
);

const EvolveIcon = () => (
  <svg className="w-8 h-8 text-cue-navy" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
  </svg>
);

const CheckIcon = () => (
    <svg className="w-5 h-5 text-cue-coral flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
    </svg>
)

const features: FeatureCardProps[] = [
  {
    title: 'Connect',
    description: 'Daily check-ins keep you close, even on busy days.',
    icon: <ConnectIcon />,
    delay: 0
  },
  {
    title: 'Understand',
    description: 'Get your next move when you\'re stuck mid-conversation.',
    icon: <UnderstandIcon />,
    delay: 100
  },
  {
    title: 'Evolve',
    description: 'Track your growth and see how far you\'ve come together.',
    icon: <EvolveIcon />,
    delay: 200
  }
];

function App() {
  return (
    <div className="min-h-screen bg-cue-cream font-sans text-cue-navy overflow-x-hidden selection:bg-cue-coral/20">
      
      {/* Navigation / Logo Area */}
      <nav className="absolute top-0 left-0 w-full p-6 md:p-10 z-50">
        <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-cue-navy">
          CUE
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-12 overflow-hidden">
        
        {/* Animated Background Blobs */}
        <div className="absolute top-[10%] left-[5%] w-64 h-64 md:w-96 md:h-96 opacity-80 md:opacity-100 z-0 pointer-events-none">
           <Blob color="coral" className="w-full h-full" />
        </div>
        <div className="absolute bottom-[15%] right-[5%] w-72 h-72 md:w-[30rem] md:h-[30rem] opacity-80 md:opacity-100 z-0 pointer-events-none">
           <Blob color="sage" delay className="w-full h-full" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl w-full text-center md:text-left md:items-start flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-cue-navy">
              Your next move in any conversation.
            </h1>
            <p className="text-xl md:text-2xl text-cue-navy/80 font-medium mb-12 max-w-lg leading-relaxed">
              When things get heated and you don't know what to say — CUE gives you a move.
            </p>

            <div className="w-full max-w-md">
                <EmailForm location="hero" />
                <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 text-sm text-cue-navy/60 font-medium">
                    <span className="flex items-center gap-1">
                        🔒 No spam. Just launch updates.
                    </span>
                    <span className="hidden sm:inline">·</span>
                    <span>Launching Spring 2025 for iOS</span>
                </div>
            </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="py-24 px-6 md:px-12 bg-white/50 backdrop-blur-sm relative z-20">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-cue-navy">How CUE works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <div 
                        key={idx}
                        className="bg-white p-8 rounded-3xl shadow-lg shadow-cue-navy/5 border border-white hover:border-cue-sage/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="w-14 h-14 bg-cue-cream rounded-2xl flex items-center justify-center mb-6">
                            {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-cue-navy">{feature.title}</h3>
                        <p className="text-lg text-cue-navy/70 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Pause Button Section */}
      <section className="py-24 px-6 md:px-12 overflow-hidden bg-cue-cream">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                
                {/* Text Side */}
                <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-cue-navy">The Pause Button</h2>
                    <div className="space-y-6 text-xl text-cue-navy/80 leading-relaxed">
                        <p>
                            One tap stops the spiral. Both phones pause. You breathe together. Then you get a real suggestion for what to say next.
                        </p>
                        <p className="font-semibold text-cue-navy">
                            Not therapy. Not tracking. Just practical moves when you're stuck.
                        </p>
                    </div>
                </div>

                {/* Mockup Side */}
                <div className="flex-1 order-1 lg:order-2 w-full flex justify-center lg:justify-end">
                    <PhoneMockup />
                </div>
            </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-cue-navy text-cue-cream">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">What early members get</h2>
            
            <div className="flex flex-col gap-4 text-left inline-block w-full max-w-md mx-auto">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="bg-cue-coral/20 p-1 rounded-full"><CheckIcon /></div>
                    <span className="text-lg font-medium">First access before public launch</span>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                     <div className="bg-cue-coral/20 p-1 rounded-full"><CheckIcon /></div>
                    <span className="text-lg font-medium">Founding member pricing (50% off)</span>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                     <div className="bg-cue-coral/20 p-1 rounded-full"><CheckIcon /></div>
                    <span className="text-lg font-medium">Direct line to shape the product</span>
                </div>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        {/* Background Decorative Shapes */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
             <div className="relative w-[500px] h-[300px]">
                <Blob color="coral" className="absolute top-0 left-0 w-64 h-64 animate-float-slow" />
                <Blob color="sage" className="absolute bottom-0 right-0 w-64 h-64 animate-float-delayed" />
             </div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-10 text-cue-navy">Be first to try CUE.</h2>
            <EmailForm location="footer" />
            <p className="mt-8 text-cue-navy/60 font-medium">Join 847 others waiting for launch</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cue-cream border-t border-cue-navy/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-extrabold text-cue-navy">CUE</div>
            
            <div className="flex gap-8 text-sm font-semibold text-cue-navy/60">
                <a href="/privacy.html" className="hover:text-cue-coral transition-colors">Privacy Policy</a>
                <a href="/terms.html" className="hover:text-cue-coral transition-colors">Terms</a>
                <a href="mailto:hello@cue-app.com" className="hover:text-cue-coral transition-colors">Contact</a>
            </div>

            <div className="text-sm text-cue-navy/40">
                © 2025 CUE. All rights reserved.
            </div>
        </div>
      </footer>

    </div>
  );
}

export default App;