'use client';

import { useState, useEffect } from 'react';

export default function Testimonial() {
  const testimonials = [
    {
      stars: 5,
      quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
      author: 'Renee Wells',
      title: 'Product Designer, Quotient',
    },
    {
      stars: 5,
      quote: 'The platform has transformed how we manage our customer relationships. Highly recommended!',
      author: 'Alex Johnson',
      title: 'CEO, TechStart',
    },
    {
      stars: 5,
      quote: 'Outstanding support team and intuitive interface. Makes our work so much easier.',
      author: 'Sarah Chen',
      title: 'Operations Manager, Layers',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left side - Testimonial content */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-16 text-white flex flex-col justify-center">
            <div className="mb-6">
              {[...Array(currentTestimonial.stars)].map((_, i) => (
                <span key={i} className="text-2xl">⭐</span>
              ))}
            </div>
            <blockquote className="text-3xl font-medium leading-relaxed mb-8">
              {currentTestimonial.quote}
            </blockquote>
            <div className="mb-10">
              <p className="font-semibold mb-1">— {currentTestimonial.author}</p>
              <p className="text-purple-200 text-sm">{currentTestimonial.title}</p>
            </div>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-6 bg-white'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className="bg-gradient-to-br from-purple-100 to-gray-100 min-h-[400px] lg:min-h-0">
            {/* Placeholder for customer image */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-purple-200/30 to-gray-200/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
