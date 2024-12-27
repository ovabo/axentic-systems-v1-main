import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-500">404</h1>
        <p className="text-2xl font-semibold text-gray-900 mt-4 mb-8">Page Not Found</p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}