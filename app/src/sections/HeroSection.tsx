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
      {/* Floating petals background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-petal-fall opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`${i % 3 === 0 ? 'text-blush-300' : i % 3 === 1 ? 'text-sage-300' : 'text-lavender-300'}`}
            >
              <path d="M12 2C12 2 8 6 8 10C8 14 12 18 12 18C12 18 16 14 16 10C16 6 12 2 12 2Z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Corner floral decorations */}
      <div className="absolute top-0 left-0 w-48 md:w-72 opacity-80 animate-fade-in">
        <img
          src="/images/floral-corner.png"
          alt="Квіткова декорація"
          className="w-full h-auto transform -scale-x-100"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-48 md:w-72 opacity-80 animate-fade-in delay-500">
        <img
          src="/images/floral-corner.png"
          alt="Квіткова декорація"
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
            <div className="w-12 h-12 rounded-full bg-blush-400 flex items-center justify-center shadow-soft animate-pulse-soft">
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
                Яцків Христина
              </h1>
              <div className="flex items-center justify-center gap-4 py-2">
                <span className="w-16 h-px bg-blush-300"></span>
                <span className="font-script text-3xl md:text-4xl text-blush-400">&</span>
                <span className="w-16 h-px bg-blush-300"></span>
              </div>
              <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-foreground">
                Назар Батькович
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

            {/* Date */}
            <div
              className={`transition-all duration-700 delay-900 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="inline-flex flex-col items-center">
                <span className="font-serif text-sm md:text-base text-blush-400 uppercase tracking-[0.3em]">
                  День тижня
                </span>
                <span className="font-serif text-4xl md:text-5xl text-foreground my-1">
                  Дата
                </span>
                <span className="font-serif text-sm md:text-base text-blush-400 uppercase tracking-[0.3em]">
                  о котрій годин
                </span>
              </div>
            </div>

            {/* Decorative line */}
            <div
              className={`flex items-center justify-center gap-3 transition-all duration-700 delay-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-sage-300"></span>
              <span className="w-24 h-px bg-blush-200"></span>
              <Heart className="w-4 h-4 text-blush-300 fill-blush-200" />
              <span className="w-24 h-px bg-blush-200"></span>
              <span className="w-2 h-2 rounded-full bg-sage-300"></span>
            </div>

            {/* Venue */}
            <div
              className={`transition-all duration-700 delay-1100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="font-serif text-xl md:text-2xl text-foreground">
                Місце
              </p>
              <p className="font-body text-base md:text-lg text-muted-foreground mt-1">
                Адреса
              </p>
            </div>
          </div>

          {/* Bottom floral garland */}
          <div className="mt-8 -mb-4">
            <img
              src="/images/floral-garland.jpg"
              alt="Квіткова гірлянда"
              className="w-full h-16 object-contain opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
