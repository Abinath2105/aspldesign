// src/components/sections/Stats.jsx
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Projects Delivered', value: 500, suffix: '+' },
  { label: 'Students Trained', value: 1000, suffix: '+' },
  { label: 'Client Satisfaction', value: 98, suffix: '%' },
  { label: 'Years Experience', value: 5, suffix: '+' },
];

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="relative py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-dark-950 to-primary-900/20" />
      
      <div ref={ref} className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    enableScrollSpy={false}
                  />
                )}
              </div>
              <p className="text-dark-400 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;