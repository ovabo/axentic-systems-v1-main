import React from 'react';
import { Calendar } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <a
      href="https://calendly.com/ovabor/axentic-onboarding"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 hidden md:flex bg-gradient-to-r from-neon-purple to-neon-blue text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition-all hover:scale-105 items-center space-x-2 z-50"
    >
      <Calendar className="w-5 h-5" />
      <span>Book Demo</span>
    </a>
  );
}