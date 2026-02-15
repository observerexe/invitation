import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
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
      id="story"
      className="min-h-screen flex items-center justify-center py-16 px-4"
      style={{ background: 'linear-gradient(180deg, #EDE6DB 0%, #F5F0E8 100%)' }}
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
            Наша Історія
          </p>

          <div className="divider-ornate mb-8">
            <span className="diamond" />
          </div>

          {/* Story text */}
          <div className="space-y-6 font-serif text-base md:text-lg text-[#5C4A3D] leading-relaxed">
            <p>
              Усе почалося зі смішної зустрічі на концерті. Ми не знали тоді, 
              що цей вечір змінить наше життя назавжди.
            </p>
            <p>
              Потім були листи, нічні розмови до світанку, наша перша подорож разом. 
              Кожен момент був наче маленьке диво.
            </p>
            <p>
              І ось ти сказала «так» у нашому улюбленому кав'ярні, 
              серед запаху свіжої кави та теплого світла свічок.
            </p>
            <p className="italic text-[#8B7765]">
              Тепер ми готуємо весілля, про яке завжди мріяли.
            </p>
          </div>

          <div className="divider-ornate mt-8">
            <span className="diamond" />
          </div>

          {/* Signature */}
          <p className="font-script text-3xl text-[#5C4A3D] mt-6">
            З любов'ю, Вікторія & Максим
          </p>
        </div>
      </div>
    </section>
  );
}
