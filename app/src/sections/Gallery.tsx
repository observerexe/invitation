import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
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

  const images = [
    { src: '/gallery_01.jpg', alt: 'Moment 1' },
    { src: '/gallery_02.jpg', alt: 'Moment 2' },
    { src: '/gallery_03.jpg', alt: 'Moment 3' },
  ];

  return (
    <section 
      ref={sectionRef} 
      id="gallery"
      className="min-h-screen flex items-center justify-center py-16 px-4"
      style={{ background: 'linear-gradient(180deg, #EDE6DB 0%, #F5F0E8 100%)' }}
    >
      <div 
        ref={cardRef}
        className="invitation-card ornate-frame relative max-w-3xl w-full py-14 px-8 md:px-14"
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
            Наші Моменти
          </p>

          <div className="flourish text-center mb-8">❦</div>

          {/* Gallery grid */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
            {images.map((img, index) => (
              <div 
                key={index}
                className="aspect-[3/4] overflow-hidden border border-[#8B7765]/20"
              >
                <img 
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="divider-ornate mb-6">
            <span className="diamond" />
          </div>

          {/* Quote */}
          <p className="font-script text-2xl md:text-3xl text-[#5C4A3D] text-center italic mb-4">
            "Любов — це не те, на що ви дивитеся, 
            <br />
            а те, що ви бачите разом"
          </p>

          <div className="flourish text-center">❦</div>
        </div>
      </div>
    </section>
  );
}
