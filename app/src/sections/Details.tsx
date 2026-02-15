import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Shirt, Utensils, Music } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Details() {
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

  const timeline = [
    { time: '15:00', event: 'Зустріч гостей', icon: Clock },
    { time: '16:00', event: 'Вінчання / Церемонія', icon: Music },
    { time: '17:00', event: 'Банкет та святкування', icon: Utensils },
    { time: '22:00', event: 'Танці до ранку', icon: Music },
  ];

  return (
    <section 
      ref={sectionRef} 
      id="details"
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
        <div className="relative z-10">
          {/* Section title */}
          <p className="font-serif text-xs tracking-[0.4em] text-[#8B7765] uppercase mb-4 text-center">
            Програма Дня
          </p>

          <div className="flourish text-center mb-8">❦</div>

          {/* Timeline */}
          <div className="space-y-6 mb-10">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-16 text-right">
                  <span className="font-serif text-lg text-[#C9A66B] font-medium">
                    {item.time}
                  </span>
                </div>
                <div className="w-px h-8 bg-[#8B7765]/20" />
                <item.icon className="w-5 h-5 text-[#8B7765]" strokeWidth={1.5} />
                <span className="font-serif text-base text-[#5C4A3D]">
                  {item.event}
                </span>
              </div>
            ))}
          </div>

          <div className="divider-ornate mb-8">
            <span className="diamond" />
          </div>

          {/* Dress code */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Shirt className="w-5 h-5 text-[#8B7765]" strokeWidth={1.5} />
              <p className="font-serif text-sm tracking-[0.3em] text-[#8B7765] uppercase">
                Dress Code
              </p>
            </div>
            <p className="font-serif text-lg text-[#5C4A3D] mb-2">
              Cocktail / Smart Casual
            </p>
            <p className="font-serif text-sm text-[#8B7765] italic">
              Пастельні тони та легкі тканини
            </p>
          </div>

          <div className="flourish text-center mt-8">❦</div>
        </div>
      </div>
    </section>
  );
}
