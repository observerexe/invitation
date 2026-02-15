import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function SaveDate() {
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
      id="date"
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
            Save the Date
          </p>

          <div className="flourish mb-6">❦</div>

          {/* Big date */}
          <div className="mb-10">
            <p className="font-script text-7xl md:text-8xl text-[#5C4A3D] mb-2">
              14
            </p>
            <div className="divider-ornate my-3">
              <span className="diamond" />
            </div>
            <p className="font-serif text-2xl tracking-[0.2em] text-[#8B7765] uppercase">
              Вересня
            </p>
            <p className="font-script text-5xl text-[#5C4A3D] mt-2">
              2026
            </p>
          </div>

          <div className="divider-ornate mb-8">
            <span className="diamond" />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5 text-[#8B7765]" strokeWidth={1.5} />
              <p className="font-serif text-lg text-[#5C4A3D]">
                15:00 — початок церемонії
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-[#8B7765]" strokeWidth={1.5} />
              <p className="font-serif text-lg text-[#5C4A3D]">
                Ресторан «Залишники», Львівська область
              </p>
            </div>
          </div>

          <div className="flourish mt-8">❦</div>
        </div>
      </div>
    </section>
  );
}
