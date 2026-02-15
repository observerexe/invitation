import { useEffect, useRef, useState } from 'react';
import { Shirt, Sparkles, Palette, Info } from 'lucide-react';

const DressCodeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const colors = [
    { name: 'Пудровий рожевий', class: 'bg-[#f4d7d7]', hex: '#f4d7d7' },
    { name: 'Пастельна лаванда', class: 'bg-[#e8dff5]', hex: '#e8dff5' },
    { name: 'М\'ятний зелений', class: 'bg-[#d4e8dc]', hex: '#d4e8dc' },
    { name: 'Ніжний персик', class: 'bg-[#fae5d3]', hex: '#fae5d3' },
    { name: 'Шампанське', class: 'bg-[#f5ecd8]', hex: '#f5ecd8' },
    { name: 'Пилова троянда', class: 'bg-[#e8c4c4]', hex: '#e8c4c4' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-cream-50 overflow-hidden"
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-40 md:w-64 opacity-50 pointer-events-none transform -scale-x-100">
        <img
          src="/images/floral-corner.png"
          alt="Квіткова декорація"
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-40 md:w-64 opacity-50 pointer-events-none transform rotate-180">
        <img
          src="/images/floral-corner.png"
          alt="Квіткова декорація"
          className="w-full h-auto"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-script text-3xl md:text-4xl text-blush-400">
            Дрес-Код
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-2">
            Стиль Вбрання
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-lg mx-auto">
            Ми будемо вдячні, якщо ви підтримаєте атмосферу свята своїм вбранням
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-blush-300"></span>
            <Sparkles className="w-4 h-4 text-blush-300" />
            <span className="w-12 h-px bg-blush-300"></span>
          </div>
        </div>

        {/* Dress code cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Ladies */}
            <div
              className={`bg-white/80 backdrop-blur-sm rounded-lg shadow-soft p-8 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-blush-100 flex items-center justify-center">
                  <Palette className="w-7 h-7 text-blush-400" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">Для Панянок</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blush-300 mt-2 flex-shrink-0"></span>
                  <p className="font-body text-muted-foreground">
                    <span className="text-foreground font-medium">Коктейльні або вечірні сукні</span> — 
                    середньої довжини або в підлогу в пастельних тонах
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blush-300 mt-2 flex-shrink-0"></span>
                  <p className="font-body text-muted-foreground">
                    <span className="text-foreground font-medium">Взуття на підборах</span> — 
                    зручне, оскільки захід проходитиме на відкритому повітрі
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blush-300 mt-2 flex-shrink-0"></span>
                  <p className="font-body text-muted-foreground">
                    <span className="text-foreground font-medium">Легкі шалі або накидки</span> — 
                    на випадок прохолодного вечора
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blush-300 mt-2 flex-shrink-0"></span>
                  <p className="font-body text-muted-foreground">
                    <span className="text-foreground font-medium">Квіткові прикраси в волоссі</span> — 
                    дуже вітаються!
                  </p>
                </div>
              </div>
            </div>

            {/* Gentlemen */}
            <div
              className={`bg-white/80 backdrop-blur-sm rounded-lg shadow-soft p-8 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center">
                  <Shirt className="w-7 h-7 text-sage-500" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">Для Панів</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-sage-300 mt-2 flex-shrink-0"></span>
                  <p className="font-body text-muted-foreground">
                    <span className="text-foreground font-medium">Костюм темно-синього, сірого або бежевого кольору</span> — 
                    класичний або злегка вільний крій
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-sage-300 mt-2 flex-shrink-0"></span>
                  <p className="font-body text-muted-foreground">
                    <span className="text-foreground font-medium">Сорочка пастельних тонів</span> — 
                    біла, кремова, блідо-блакитна або пудрова
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-sage-300 mt-2 flex-shrink-0"></span>
                  <p className="font-body text-muted-foreground">
                    <span className="text-foreground font-medium">Краватка або метелик</span> — 
                    в тон кольоровій гамі весілля
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-sage-300 mt-2 flex-shrink-0"></span>
                  <p className="font-body text-muted-foreground">
                    <span className="text-foreground font-medium">Класичне взуття</span> — 
                    туфлі або лофери темного кольору
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Color palette */}
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-lg shadow-soft p-8 transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Info className="w-5 h-5 text-blush-400" />
              <h4 className="font-serif text-xl text-foreground">Кольорова Палітра</h4>
            </div>
            
            <p className="font-body text-muted-foreground mb-6">
              Ми будемо раді, якщо ви оберете вбрання в наступних кольорах:
            </p>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full shadow-soft transition-transform duration-300 group-hover:scale-110 ${color.class}`}
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <span className="font-body text-xs md:text-sm text-muted-foreground text-center">
                    {color.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-cream-100 rounded-lg">
              <p className="font-body text-sm text-muted-foreground text-center">
                <span className="text-foreground font-medium">Будь ласка, уникайте:</span>{' '}
                яскравих неонових кольорів, білого (для гостей), джинсів та спортивного одягу
              </p>
            </div>
          </div>

          {/* Additional notes */}
          <div
            className={`mt-8 text-center transition-all duration-700 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="font-body text-muted-foreground">
              Якщо у вас є питання щодо дрес-коду — не соромтеся{' '}
              <a
                href="mailto:wedding@emmarose-james.com"
                className="text-blush-400 hover:text-blush-500 underline"
              >
                зв'язатися з нами
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;
