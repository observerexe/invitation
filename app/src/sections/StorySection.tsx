import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const StorySection = () => {
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

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-cream-50 overflow-hidden"
    >
      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-40 md:w-64 opacity-60 pointer-events-none">
        <img
          src="/images/floral-corner.png"
          alt="Квіткова декорація"
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-40 md:w-64 opacity-60 pointer-events-none transform rotate-180">
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
            Наша Історія
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-2">
            Як Ми Познайомились
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-blush-300"></span>
            <span className="w-2 h-2 rounded-full bg-sage-300"></span>
            <span className="w-12 h-px bg-blush-300"></span>
          </div>
        </div>

        {/* Story content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blush-100 rounded-lg transform rotate-3"></div>
                <img
                  src="/images/wedding-rings.jpg"
                  alt="Обручки"
                  className="relative rounded-lg shadow-elegant w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Text content */}
            <div
              className={`space-y-6 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="relative">
                <Quote className="absolute -top-4 -left-2 w-8 h-8 text-blush-200" />
                <p className="font-body text-lg text-foreground leading-relaxed pl-6">
                  Все почалось однією теплою весняною післяобідньою порою на вечірці в спільних 
                  друзів у саду. Емма милувалася трояндами, коли Джеймс випадково пролив свій 
                  лимонад, намагаючись уникнути бджоли. Їхні погляди зустрілись, розлився сміх, 
                  і те, що почалося як незручна ситуація, перетворилося на години розмови 
                  під зоряним небом.
                </p>
              </div>

              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Три роки, незліченні пригоди та мільйон спогадів потому Джеймс зробив пропозицію 
                в тому самому саду, де вони вперше зустрілись. Серед квітучих троянд і заходу сонця 
                Емма сказала "так" на все життя.
              </p>

              <div className="pt-4">
                <p className="font-script text-2xl text-blush-400">
                  "У тобі я знайшла свій дім."
                </p>
              </div>
            </div>
          </div>

          {/* Timeline milestones */}
          <div
            className={`mt-20 transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-blush-100 flex items-center justify-center mx-auto mb-3">
                  <span className="font-script text-2xl text-blush-400">2022</span>
                </div>
                <p className="font-serif text-sm text-foreground">Перша Зустріч</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-3">
                  <span className="font-script text-2xl text-sage-400">2023</span>
                </div>
                <p className="font-serif text-sm text-foreground">Перше Побачення</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-lavender-100 flex items-center justify-center mx-auto mb-3">
                  <span className="font-script text-2xl text-lavender-400">2024</span>
                </div>
                <p className="font-serif text-sm text-foreground">Пропозиція</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-blush-100 flex items-center justify-center mx-auto mb-3">
                  <span className="font-script text-2xl text-blush-400">2025</span>
                </div>
                <p className="font-serif text-sm text-foreground">Наше Весілля</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
