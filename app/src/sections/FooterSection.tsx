import { Heart } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="relative py-16 bg-cream-200 overflow-hidden">
      {/* Pearl decoration */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl opacity-50 pointer-events-none">
        <img
          src="/images/pearls-garland.png"
          alt="Перлинна декорація"
          className="w-full h-24 object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6">
          {/* Names */}
          <div className="space-y-2">
            <h3 className="font-script text-4xl md:text-5xl text-foreground">
              Христина та Назар
            </h3>
            <p className="font-serif text-lg text-mocha-500">
              Дата
            </p>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-16 h-px bg-mocha-300"></span>
            <Heart className="w-5 h-5 text-mocha-500 fill-mocha-400 animate-pulse-soft" />
            <span className="w-16 h-px bg-mocha-300"></span>
          </div>

          {/* Love quote */}
          <p className="font-body text-muted-foreground italic max-w-md mx-auto">
            "Дві душі, одне серце, назавжди переплетені в танці вічного кохання."
          </p>

          {/* Copyright */}
          <div className="pt-8 border-t border-mocha-200/50">
            <p className="font-body text-sm text-muted-foreground">
              Створено з{' '}
              <Heart className="w-3 h-3 inline text-mocha-500 fill-mocha-500" />{' '}
              для нашого особливого дня
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
