import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Closing() {
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
      id="closing"
      className="min-h-screen flex items-center justify-center py-16 px-4"
      style={{ background: 'linear-gradient(180deg, #EDE6DB 0%, #E8E0D4 100%)' }}
    >
      <div 
        ref={cardRef}
        className="invitation-card ornate-frame relative max-w-2xl w-full py-16 px-8 md:px-14"
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
          {/* Top flourish */}
          <div className="flourish mb-8">❦</div>

          {/* Main message */}
          <h2 className="font-script text-5xl md:text-6xl text-[#5C4A3D] mb-6">
            До зустрічі!
          </h2>

          <div className="divider-ornate mb-8">
            <span className="diamond" />
          </div>

          <p className="font-serif text-lg text-[#5C4A3D] leading-relaxed mb-8 max-w-md mx-auto">
            Ми з нетерпінням чекаємо цього особливого дня, 
            щоб розділити його з найдорожчими людьми.
          </p>

          <p className="font-serif text-base text-[#8B7765] italic mb-10">
            З любов'ю та вдячністю
          </p>

          {/* Names */}
          <div className="mb-10">
            <p className="font-script text-4xl text-[#5C4A3D]">
              Вікторія <span className="text-[#C9A66B]">&</span> Максим
            </p>
          </div>

          <div className="divider-ornate mb-8">
            <span className="diamond" />
          </div>

          {/* Contact */}
          <a 
            href="mailto:velychne.vesillya@email.com"
            className="inline-flex items-center gap-2 font-serif text-sm text-[#8B7765] hover:text-[#5C4A3D] transition-colors"
          >
            <Mail className="w-4 h-4" />
            velychne.vesillya@email.com
          </a>

          {/* Bottom flourish */}
          <div className="flourish mt-8">❦</div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="font-serif text-xs text-[#8B7765]/60 tracking-widest uppercase">
          V • M 2026
        </p>
      </div>
    </section>
  );
}
