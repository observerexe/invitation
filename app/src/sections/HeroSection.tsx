import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream-50 paper-texture">
      {/* Corner pearl decorations */}
      <div className="absolute top-0 left-0 w-48 md:w-80 opacity-70 animate-fade-in">
        <img
          src="/images/pearls-corner-1.png"
          alt="Перлинна декорація"
          className="w-full h-auto transform -scale-x-100"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-48 md:w-80 opacity-70 animate-fade-in delay-500">
        <img
          src="/images/pearls-corner-2.png"
          alt="Перлинна декорація"
          className="w-full h-auto transform -scale-y-100"
        />
      </div>

      {/* Main content - Letter envelope style */}
      <div className="relative z-10 w-full max-w-2xl mx-4">
        <div
          className={`relative bg-white/80 backdrop-blur-sm rounded-lg shadow-elegant p-8 md:p-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Wax seal decoration */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 rounded-full bg-mocha-500 flex items-center justify-center shadow-soft animate-pulse-soft">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
          </div>

          {/* Letter content */}
          <div className="text-center space-y-8 mt-4">
            {/* Together with their families */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="font-body text-lg md:text-xl text-muted-foreground tracking-wide italic">
                Разом із нашими родинами
              </p>
            </div>

            {/* Couple names */}
            <div
              className={`space-y-2 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-foreground">
                Христина
              </h1>
              <div className="flex items-center justify-center gap-4 py-2">
                <span className="w-16 h-px bg-mocha-300"></span>
                <span className="font-script text-3xl md:text-4xl text-mocha-500">&</span>
                <span className="w-16 h-px bg-mocha-300"></span>
              </div>
              <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-foreground">
                Назар
              </h1>
            </div>

            {/* Invitation text */}
            <div
              className={`transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="font-body text-lg md:text-xl text-muted-foreground tracking-wide">
                раді запросити вас на святкування нашого весілля
              </p>
            </div>

            {/* Date info with classic style */}
            <div
              className={`space-y-2 transition-all duration-700 delay-900 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="font-serif text-sm text-mocha-400 uppercase tracking-[0.3em]">
                День тижня
              </span>
              <span className="font-serif text-4xl md:text-5xl text-foreground block">
                Дата
              </span>
              <span className="font-serif text-sm text-mocha-400 uppercase tracking-[0.3em] block">
                Година
              </span>
            </div>

            {/* Decorative line */}
            <div
              className={`flex items-center justify-center gap-3 transition-all duration-700 delay-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-cappuccino-400"></span>
              <span className="w-24 h-px bg-mocha-200"></span>
              <Heart className="w-4 h-4 text-mocha-400 fill-mocha-300" />
              <span className="w-24 h-px bg-mocha-200"></span>
              <span className="w-2 h-2 rounded-full bg-cappuccino-400"></span>
            </div>

            {/* Venue */}
            <div
              className={`space-y-1 transition-all duration-700 delay-1100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="font-serif text-2xl md:text-3xl text-foreground block">
                Місце
              </span>
              <span className="font-body text-base md:text-lg text-muted-foreground block">
                Адреса
              </span>
            </div>
          </div>

          {/* Bottom pearl garland */}
          <div className="mt-8 -mb-4">
            <img
              src="/images/pearls-garland.png"
              alt="Перлинна гірлянда"
              className="w-full h-16 object-contain opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
