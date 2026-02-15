import { Heart } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="relative py-16 bg-cream-200 overflow-hidden">
      {/* Floral decoration */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl opacity-30 pointer-events-none">
        <img
          src="/images/floral-garland.jpg"
          alt="Квіткова декорація"
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
            <p className="font-serif text-lg text-blush-400">
              15 червня 2025
            </p>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-16 h-px bg-blush-300"></span>
            <Heart className="w-5 h-5 text-blush-400 fill-blush-300 animate-pulse-soft" />
            <span className="w-16 h-px bg-blush-300"></span>
          </div>

          {/* Love quote */}
          <p className="font-body text-muted-foreground italic max-w-md mx-auto">
            "Дві душі, одне серце, назавжди переплетені в танці вічного кохання."
          </p>

          {/* Copyright */}
          <div className="pt-8 border-t border-blush-200/50">
            <p className="font-body text-sm text-muted-foreground">
              Створено з{' '}
              <Heart className="w-3 h-3 inline text-blush-400 fill-blush-400" />{' '}
              для нашого особливого дня
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
