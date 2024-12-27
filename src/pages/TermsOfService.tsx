import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">By accessing and using Axentic's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-gray-600">Permission is granted to temporarily access Axentic's services for personal, non-commercial transitory viewing only.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p className="text-gray-600">The materials on Axentic's website are provided on an 'as is' basis. Axentic makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
            <p className="text-gray-600">In no event shall Axentic or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Axentic's services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
            <p className="text-gray-600">If you have any questions about these Terms, please contact us at <a href="mailto:axentic@ovabor.com" className="text-primary-500 hover:text-primary-600">axentic@ovabor.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}