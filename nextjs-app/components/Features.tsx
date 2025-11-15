'use client';

import { useEffect, useRef, useState } from 'react';

export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Unlimited cards',
      description: 'Give your team the autonomy they need with access to as many cards as they need. Authorise purchases with a click. Simple.',
    },
    {
      icon: '💰',
      title: 'Easy expense policies',
      description: 'Every card comes with configurable spending limits, purchase restrictions, and notifications for each employee and team.',
    },
    {
      icon: '📊',
      title: 'Advanced analytics',
      description: 'An all-in-one platform that helps you balance everything your team need to be happy and your finances in order.',
    },
    {
      icon: '👁️',
      title: 'Real-time visibility on spending',
      description: 'No more unpleasant surprises. Our in-app top line view of your business spending means you can see who\'s spending what, when, & where.',
    },
    {
      icon: '🔗',
      title: 'Connect the tools you already use',
      description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
    },
    {
      icon: '💬',
      title: 'Our people make the difference',
      description: 'We\'re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
    },
  ];

  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-purple-600 font-semibold mb-3">Features</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-5 tracking-tight">
            All you need to run your finances effectively
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Open a full-featured account in with virtual cards in less than 5 minutes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className={`bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center text-2xl mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
