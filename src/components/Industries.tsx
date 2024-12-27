import React from 'react';
import { Shield, Server, Database, Factory, LineChart, Heart, ShoppingCart, Zap } from 'lucide-react';
import IndustryCard from './IndustryCard';
import type { Industry } from '../types';

const industries: Industry[] = [
  {
    title: "IT Operations & Automation",
    icon: Server,
    applications: [
      "Service desk automation",
      "System provisioning",
      "Access management",
      "Infrastructure monitoring",
      "Asset management"
    ]
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    applications: [
      "Threat detection",
      "Incident response",
      "Compliance monitoring",
      "Risk assessment",
      "Audit preparation"
    ]
  },
  {
    title: "Privacy & Data Governance",
    icon: Database,
    applications: [
      "Data classification",
      "Privacy compliance",
      "Data access control",
      "Data lifecycle management",
      "Privacy impact assessments"
    ]
  },
  {
    title: "Manufacturing & Supply Chain",
    icon: Factory,
    applications: [
      "Production optimization",
      "Quality control",
      "Supply chain visibility",
      "Predictive maintenance",
      "Inventory management"
    ]
  },
  {
    title: "Financial Services",
    icon: LineChart,
    applications: [
      "Investment analysis",
      "Fraud detection",
      "Regulatory compliance",
      "Market intelligence",
      "Portfolio management"
    ]
  },
  {
    title: "Healthcare & Life Sciences",
    icon: Heart,
    applications: [
      "Patient data insights",
      "Clinical research",
      "Treatment recommendations",
      "Drug discovery",
      "Healthcare compliance"
    ]
  },
  {
    title: "Retail & E-commerce",
    icon: ShoppingCart,
    applications: [
      "Inventory optimization",
      "Customer insights",
      "Price optimization",
      "Personalized recommendations",
      "Supply chain management"
    ]
  },
  {
    title: "Energy & Utilities",
    icon: Zap,
    applications: [
      "Asset management",
      "Maintenance scheduling",
      "Resource optimization",
      "Compliance monitoring",
      "Risk assessment"
    ]
  }
];

export default function Industries() {
  return (
    <section className="py-20 bg-gray-50" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Solutions Across Industries
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover how Axentic transforms operations across diverse sectors with intelligent automation
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>
      </div>
    </section>
  );
}