import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/10 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Transform Your Data into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
              Intelligent Action
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Axentic leverages AI agents to process complex enterprise data in hours, not weeks.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={scrollToDemo}
              className="flex items-center bg-gradient-to-r from-neon-purple to-neon-blue text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
            <a 
              href="#features"
              className="flex items-center border border-neon-green text-neon-green px-8 py-3 rounded-lg hover:bg-neon-green/10 transition-colors"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
