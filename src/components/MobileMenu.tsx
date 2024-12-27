import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Industries', href: '#industries' },
  { label: 'Technology', href: '#technology' },
  { label: 'Demo', href: '#demo' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-gray-900"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 space-y-4 animate-fade-down">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="block w-full text-left py-2 text-gray-600 hover:text-primary-500"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://calendly.com/ovabor/axentic-onboarding"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Book Demo
          </a>
        </div>
      )}
    </div>
  );
}