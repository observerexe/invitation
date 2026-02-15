import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function RSVP() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    menu: 'all',
    wishes: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      ref={sectionRef} 
      id="rsvp"
      className="min-h-screen flex items-center justify-center py-16 px-4"
      style={{ background: 'linear-gradient(180deg, #F5F0E8 0%, #EDE6DB 100%)' }}
    >
      <div 
        ref={cardRef}
        className="invitation-card ornate-frame relative max-w-xl w-full py-14 px-8 md:px-14"
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
            Підтвердження
          </p>

          <div className="flourish text-center mb-6">❦</div>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#C9A66B]/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-[#C9A66B]" />
              </div>
              <h3 className="font-script text-3xl text-[#5C4A3D] mb-3">
                Дякуємо!
              </h3>
              <p className="font-serif text-base text-[#8B7765]">
                Ми отримали вашу відповідь і з нетерпінням чекаємо на зустріч!
              </p>
            </div>
          ) : (
            <>
              <p className="font-serif text-base text-[#5C4A3D] text-center mb-8">
                Будь ласка, підтвердьте свою присутність до{' '}
                <span className="text-[#C9A66B] font-medium">1 серпня 2026</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="font-serif text-sm text-[#8B7765] block mb-2">
                    Ім'я та прізвище
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-[#8B7765]/20 text-[#5C4A3D] font-serif"
                    placeholder="Введіть ваше ім'я"
                  />
                </div>

                {/* Number of guests */}
                <div>
                  <label className="font-serif text-sm text-[#8B7765] block mb-2">
                    Кількість гостей
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-[#8B7765]/20 text-[#5C4A3D] font-serif"
                  >
                    <option value="1">1 особа</option>
                    <option value="2">2 особи</option>
                    <option value="3">3 особи</option>
                    <option value="4">4 особи</option>
                  </select>
                </div>

                {/* Menu preference */}
                <div>
                  <label className="font-serif text-sm text-[#8B7765] block mb-2">
                    Переваги в меню
                  </label>
                  <select
                    name="menu"
                    value={formData.menu}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-[#8B7765]/20 text-[#5C4A3D] font-serif"
                  >
                    <option value="all">Будь-яке меню</option>
                    <option value="vegetarian">Вегетаріанське</option>
                    <option value="allergies">Є алергії (вкажу нижче)</option>
                  </select>
                </div>

                {/* Wishes */}
                <div>
                  <label className="font-serif text-sm text-[#8B7765] block mb-2">
                    Побажання / Алергії
                  </label>
                  <textarea
                    name="wishes"
                    value={formData.wishes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/50 border border-[#8B7765]/20 text-[#5C4A3D] font-serif resize-none"
                    placeholder="Ваші побажання..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-gold w-full flex items-center justify-center gap-2 mt-6"
                >
                  <Heart className="w-4 h-4" />
                  Підтвердити участь
                </button>
              </form>
            </>
          )}

          <div className="flourish text-center mt-8">❦</div>
        </div>
      </div>
    </section>
  );
}
