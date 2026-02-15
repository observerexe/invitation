import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    if (!section || !card) return;

    const ctx = gsap.context(() => {
      // Initial animation
      gsap.fromTo(card, 
        { opacity: 0, scale: 0.95, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power2.out', delay: 0.3 }
      );

      // Scroll animation
      gsap.to(card, {
        y: -50,
        opacity: 0.3,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex items-center justify-center py-16 px-4"
      style={{ background: 'linear-gradient(180deg, #F5F0E8 0%, #EDE6DB 100%)' }}
    >
      <div 
        ref={cardRef}
        className="invitation-card ornate-frame relative max-w-2xl w-full py-16 px-8 md:px-16 text-center"
      >
        {/* Corner decorations */}
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="corner-bl" />
        <div className="corner-br" />

        {/* Inner border */}
        <div className="absolute inset-4 border border-[#8B7765]/10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">
          {/* Top flourish */}
          <div className="flourish mb-6">❦</div>

          {/* Intro text */}
          <p className="font-serif text-sm tracking-[0.3em] text-[#8B7765] uppercase mb-8">
            Запрошуємо вас на весілля
          </p>

          {/* Names */}
          <h1 className="font-script text-6xl md:text-7xl text-[#5C4A3D] mb-2">
            Вікторія
          </h1>
          <div className="divider-ornate my-4">
            <span className="diamond" />
            <span className="font-serif text-2xl text-[#8B7765] italic">&</span>
            <span className="diamond" />
          </div>
          <h1 className="font-script text-6xl md:text-7xl text-[#5C4A3D] mb-10">
            Максим
          </h1>

          {/* Date */}
          <div className="mb-8">
            <p className="font-serif text-lg tracking-[0.2em] text-[#5C4A3D] uppercase">
              14 Вересня 2026
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#8B7765]/40 to-transparent mx-auto my-4" />
            <p className="font-serif text-base text-[#8B7765]">
              Львів, Україна
            </p>
          </div>

          {/* Bottom flourish */}
          <div className="flourish mt-6">❦</div>
        </div>
      </div>
    </section>
  );
}
