import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

const DressCodeSection = () => {
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

  const ladiesColors = [
    { name: 'Шоколадний', class: 'bg-[#4a2e26]' },
    { name: 'Мокко', class: 'bg-[#8a5238]' },
    { name: 'Капучино', class: 'bg-[#c39a72]' },
    { name: 'Чорний', class: 'bg-[#1a1a1a]' },
    { name: 'Шампанський', class: 'bg-[#f7e7ce]' },
  ];

  const menColors = [
    { name: 'Шоколадний', class: 'bg-[#4a2e26]' },
    { name: 'Чорний', class: 'bg-[#1a1a1a]' },
    { name: 'Білий', class: 'bg-[#faf8f5]' },
    { name: 'Капучино', class: 'bg-[#c39a72]' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-cream-50 overflow-hidden"
    >
      {/* Corner pearl decorations */}
      <div className="absolute top-0 left-0 w-48 md:w-72 opacity-70 pointer-events-none transform -scale-x-100">
        <img
          src="/images/pearls-corner-1.png"
          alt="Перлинна декорація"
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-48 md:w-72 opacity-70 pointer-events-none transform rotate-180">
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
            Дрес-Код
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-2">
            Кольорова Палітра
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-mocha-300"></span>
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span className="w-12 h-px bg-mocha-300"></span>
          </div>
        </div>

        {/* Color palette cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ladies */}
            <div
              className={`bg-white/80 backdrop-blur-sm rounded-lg shadow-soft p-8 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <h3 className="font-serif text-2xl text-foreground text-center mb-8">
                Для Панянок
              </h3>
              
              <div className="space-y-4">
                {ladiesColors.map((color, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-full shadow-soft border-2 border-white ${color.class}`}
                    ></div>
                    <span className="font-body text-lg text-foreground group-hover:text-mocha-600 transition-colors">
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gentlemen */}
            <div
              className={`bg-white/80 backdrop-blur-sm rounded-lg shadow-soft p-8 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <h3 className="font-serif text-2xl text-foreground text-center mb-8">
                Для Панів
              </h3>
              
              <div className="space-y-4">
                {menColors.map((color, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-full shadow-soft border-2 border-white ${color.class}`}
                    ></div>
                    <span className="font-body text-lg text-foreground group-hover:text-mocha-600 transition-colors">
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;
