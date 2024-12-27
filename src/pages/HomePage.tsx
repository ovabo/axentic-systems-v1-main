import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import Industries from '../components/Industries';
import Technology from '../components/Technology';
import DemoVideo from '../components/DemoVideo';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="fixed inset-0 bg-gradient-radial from-dark-50 via-dark to-dark opacity-50 pointer-events-none"></div>
      <Header />
      <main className="relative">
        <Hero />
        <ValueProposition />
        <Industries />
        <Technology />
        <DemoVideo />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}