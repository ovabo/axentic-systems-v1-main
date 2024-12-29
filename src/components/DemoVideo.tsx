import React from 'react';

export default function DemoVideo() {
  return (
    <section className="py-20 bg-gray-50" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          See Axentic in Action
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Watch how Axentic transforms enterprise data workflows
        </p>
        <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://youtu.be/embed/UiF6skAyur4"
            title="Axentic Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
