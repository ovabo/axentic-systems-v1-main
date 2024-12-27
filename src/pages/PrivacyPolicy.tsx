import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-gray-600">We collect information that you provide directly to us, including name, email address, and any other information you choose to provide.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Understand how you use our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p className="text-gray-600">We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Contact Us</h2>
            <p className="text-gray-600">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:axentic@ovabor.com" className="text-primary-500 hover:text-primary-600">axentic@ovabor.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}