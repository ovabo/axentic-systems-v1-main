import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Industry } from '../types';

export default function IndustryCard({ title, applications, icon: Icon }: Industry) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <Icon className="w-10 h-10 text-primary-500 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <ul className="space-y-2 mb-4">
        {applications.map((app, index) => (
          <li key={index} className="text-gray-600">{app}</li>
        ))}
      </ul>
      <a 
        href="https://calendly.com/ovabor/axentic-onboarding"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-primary-500 hover:text-primary-600 transition-colors"
      >
        Book Demo <ArrowUpRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
}