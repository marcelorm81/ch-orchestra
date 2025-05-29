import React, { useState, useEffect } from 'react';
import InteractiveSurface from './components/InteractiveSurface';
import audioService from './services/AudioService';
import { InstrumentStyle } from './types';

const App: React.FC = () => {
  const [currentStyle, setCurrentStyle] = useState<InstrumentStyle>(InstrumentStyle.ETHEREAL_PAD);

  useEffect(() => {
    audioService.setStyle(currentStyle);
  }, [currentStyle]);

  const styles: InstrumentStyle[] = [
    InstrumentStyle.ETHEREAL_PAD,
    InstrumentStyle.SYNTH_LEAD,
    InstrumentStyle.PERCUSSIVE_PLUCK,
  ];

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-red-700 via-red-900 to-black flex flex-col items-center justify-center select-none overflow-hidden">
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-center space-x-2 z-10">
        {styles.map((style) => (
          <button
            key={style}
            onClick={() => setCurrentStyle(style)}
            className={`py-2 px-4 rounded shadow-md font-serif text-sm md:text-base transition-all duration-150 ease-in-out
                        ${currentStyle === style 
                            ? 'bg-amber-400 text-red-900 ring-2 ring-amber-200' 
                            : 'bg-red-800 hover:bg-red-700 text-amber-100 hover:text-white'
                        }`}
            aria-pressed={currentStyle === style}
          >
            {style}
          </button>
        ))}
      </div>
      <InteractiveSurface />
    </div>
  );
};

export default App;