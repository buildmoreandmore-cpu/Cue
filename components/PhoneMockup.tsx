import React from 'react';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col items-center justify-center overflow-hidden">
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      
      {/* Screen Content */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-cue-cream flex flex-col relative">
        
        {/* Status Bar */}
        <div className="w-full h-8 flex justify-between items-center px-6 pt-2 z-10">
            <span className="text-xs font-bold text-cue-navy">9:41</span>
            <div className="flex gap-1">
                <div className="w-4 h-2.5 bg-cue-navy rounded-sm"></div>
            </div>
        </div>

        {/* Dynamic Islandish notch */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>

        {/* App UI: Pause Screen */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
            
            {/* Background Rings */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-64 h-64 border border-cue-sage rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }}></div>
            </div>
            
            {/* Main Breathing Circle */}
            <div className="w-40 h-40 bg-cue-sage/20 rounded-full flex items-center justify-center animate-breathe relative z-10 backdrop-blur-sm border border-cue-sage/30">
                 <div className="w-24 h-24 bg-cue-sage rounded-full opacity-40 blur-xl absolute"></div>
                 <span className="text-cue-navy font-bold text-lg relative z-20">Breathe</span>
            </div>

            <div className="mt-12 text-center">
                <h3 className="text-cue-navy font-bold text-xl mb-2">Syncing...</h3>
                <p className="text-cue-navy/60 text-sm">Waiting for partner to pause</p>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-10 w-full px-8">
                <div className="w-full h-12 bg-cue-navy rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    I'm Ready
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};