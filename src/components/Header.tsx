import React from 'react';
import { Brain } from 'lucide-react';
import MobileMenu from './MobileMenu';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Industries', href: '#industries' },
  { label: 'Technology', href: '#technology' },
  { label: 'Demo', href: '#demo' },
];

export default function Header() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full bg-dark/80 backdrop-blur-md z-50 border-b border-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a 
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Brain className="h-8 w-8 text-neon-green" />
            <span className="ml-2 text-xl font-bold text-white">Axentic</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleScroll(item.href)}
                className="text-gray-300 hover:text-neon-green transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://calendly.com/ovabor/axentic-onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-neon-purple to-neon-blue text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Book Demo
            </a>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}