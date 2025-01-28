'use client';
import { useEffect } from 'react';
import fluidCursor from '@/hooks/use-FluidCursor';
import '../styles/shopSection.css';

function shopSection() {
  useEffect(() => {
    // Initialize the fluid cursor effect
    fluidCursor();
  }, []);

  return (
    <div className="h-full w-full flex flex-col justify-center text-center try">
      {/* Canvas for fluid cursor */}
      <div className="fixed top-0 left-0 z-2">
        <canvas id="fluid" className="w-screen h-screen" />
      </div>

      <div className="p-[35vh]">
        <h1 className="text-4xl p-6 md:text-6xl font-bold text-[rgba(255,255,255,0.4)] mb-4">
          Experience Power Without Limits - Designed for the Future.
        </h1>
        <p className="text-xl md:text-2xl p-6 text-[rgba(255,255,255,0.4)] mb-6">
          Find your next high-performance laptop today and elevate your computing experience.
        </p>
        <button className="px-6 py-3 bg-[rgba(212,190,190,0)]shadow-lg shadow-[rgba(31,38,135,0.37)] backdrop-blur-[20px] hover:scale-110 transition-all transform-cpu text-white rounded-lg hover:bg-[rgba(212,190,190,0.7)] hover:shadow-lg hover:shadow-[rgba(31,38,135,0.37)] hover:backdrop-blur-[0px] hover:rounded-lg ">
          Shop Now
        </button>
      </div>
      <div className="box"></div>
    </div>
  );
}

export default shopSection;
