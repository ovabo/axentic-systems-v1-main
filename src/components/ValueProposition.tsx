import React from 'react';
import { Globe2, Cpu, Zap } from 'lucide-react';

const features = [
  {
    icon: Globe2,
    title: "Universal Enterprise Solution",
    description: "Transform workflows across industries from healthcare to finance."
  },
  {
    icon: Cpu,
    title: "Technology Leadership",
    description: "Powered by leading AI models, RAG with LlamaIndex, and full-stack production agents."
  },
  {
    icon: Zap,
    title: "Core Capabilities",
    description: "Information discovery, insight synthesis, automated reporting, and intelligent action-taking."
  }
];

export default function ValueProposition() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Axentic?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:bg-primary-50 transition-colors">
              <feature.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}