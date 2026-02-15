import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Navigation } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Venue() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    if (!section || !card) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="venue"
      className="min-h-screen flex items-center justify-center py-16 px-4"
      style={{ background: 'linear-gradient(180deg, #F5F0E8 0%, #EDE6DB 100%)' }}
    >
      <div 
        ref={cardRef}
        className="invitation-card ornate-frame relative max-w-2xl w-full py-14 px-8 md:px-14"
      >
        {/* Corner decorations */}
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="corner-bl" />
        <div className="corner-br" />

        {/* Inner border */}
        <div className="absolute inset-4 border border-[#8B7765]/10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Section title */}
          <p className="font-serif text-xs tracking-[0.4em] text-[#8B7765] uppercase mb-4">
            Локація
          </p>

          <div className="flourish mb-6">❦</div>

          {/* Venue name */}
          <h2 className="font-script text-5xl md:text-6xl text-[#5C4A3D] mb-4">
            Залишники
          </h2>

          <div className="divider-ornate mb-6">
            <span className="diamond" />
          </div>

          {/* Address */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-[#8B7765]" strokeWidth={1.5} />
            <p className="font-serif text-lg text-[#5C4A3D]">
              Львівська область
            </p>
          </div>
          <p className="font-serif text-base text-[#8B7765] mb-8">
            25 км від міста Львова
          </p>

          {/* Description */}
          <p className="font-serif text-base text-[#5C4A3D] leading-relaxed mb-8 max-w-md mx-auto">
            Затишний ресторан серед мальовничих Карпатських гір. 
            Ідеальне місце для нашого святкування.
          </p>

          {/* Map button */}
          <a 
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-elegant inline-flex items-center gap-2"
          >
            <Navigation className="w-4 h-4" />
            Прокласти маршрут
          </a>

          <div className="flourish mt-10">❦</div>
        </div>
      </div>
    </section>
  );
}
