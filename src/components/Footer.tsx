import React from 'react';
import { Brain, Github, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold">Axentic</span>
            </div>
            <p className="text-gray-400">
              Transform enterprise data into intelligent action
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a
                  href="mailto:careers@ovabor.com"
                  className="text-gray-400 hover:text-white"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="mailto:axentic@ovabor.com"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/ovabor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/ovabor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/ovabor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com/@ovabor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Axentic Systems by Ovabor Labs.
          </p>
        </div>
      </div>
    </footer>
  );
}
