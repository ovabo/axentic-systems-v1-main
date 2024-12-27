import React from 'react';
import { Bot, Lock, BarChart3 } from 'lucide-react';

const technologies = [
  {
    icon: Bot,
    title: "Advanced AI Integration",
    description: "RAG with LlamaIndex for sophisticated data processing, seamlessly integrated with leading AI models from OpenAI, Anthropic, Google, Meta, and Deepseek."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Role-based access control, comprehensive audit logging, and secure data handling ensure your information stays protected."
  },
  {
    icon: BarChart3,
    title: "Scalable Infrastructure",
    description: "Built to handle enterprise-scale workloads with distributed processing and intelligent resource management."
  }
];

export default function Technology() {
  return (
    <section className="py-20 bg-white" id="technology">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Built for the Future of Enterprise
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Leverage cutting-edge technology to transform your enterprise operations
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="p-6 rounded-xl bg-primary-50">
              <tech.icon className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{tech.title}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}