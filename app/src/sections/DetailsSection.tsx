import { useEffect, useRef, useState } from 'react';
import { Clock } from 'lucide-react';

const DetailsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scheduleItems = [0, 1, 2, 3];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-cream-100 paper-texture overflow-hidden"
    >
      {/* Corner pearl decorations */}
      <div className="absolute top-0 right-0 w-48 md:w-72 opacity-50 pointer-events-none">
        <img
          src="/images/pearls-corner-2.png"
          alt="Перлинна декорація"
          className="w-full h-auto"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-script text-3xl md:text-4xl text-mocha-500">
            Деталі Весілля
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-2">
            Святкування
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-mocha-300"></span>
            <span className="w-2 h-2 rounded-full bg-cappuccino-400"></span>
            <span className="w-12 h-px bg-mocha-300"></span>
          </div>
        </div>

        {/* Venue image - without overlay */}
        <div
          className={`relative max-w-4xl mx-auto mb-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative rounded-lg overflow-hidden shadow-elegant">
            <img
              src="/images/venue.jpg"
              alt="Місце проведення весілля"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>

        {/* Schedule timeline */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-serif text-2xl md:text-3xl text-center text-foreground mb-10">
            Розклад Заходів
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-mocha-200 md:-translate-x-px"></div>

            {scheduleItems.map((_, index) => (
              <div
                key={index}
                className={`relative flex items-start md:items-center gap-6 mb-10 last:mb-0 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                {/* Icon circle */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-full bg-white shadow-soft flex items-center justify-center flex-shrink-0 ${
                    index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <Clock className="w-6 h-6 text-mocha-500" />
                </div>

                {/* Content */}
                <div
                  className={`flex-1 bg-white/70 backdrop-blur-sm rounded-lg p-5 shadow-soft ${
                    index % 2 === 0 ? 'md:order-2 md:text-left' : 'md:order-1 md:text-right'
                  }`}
                >
                  <span className="font-serif text-lg text-mocha-500 block">
                    Час
                  </span>
                  <span className="font-serif text-2xl md:text-3xl text-foreground block mt-1">
                    Подія
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
