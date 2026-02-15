import { useEffect, useRef, useState } from 'react';
import { Clock, MapPin, Utensils, Music, Camera, Car } from 'lucide-react';

const DetailsSection = () => {
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

  const schedule = [
    {
      time: '15:30',
      event: 'Прибуття Гостей',
      description: 'Будь ласка, приходьте заздалегідь, щоб знайти своє місце',
      icon: Clock,
    },
    {
      time: '16:00',
      event: 'Весільна Церемонія',
      description: 'Початок весільної церемонії',
      icon: MapPin,
    },
    {
      time: '17:00',
      event: 'Коктейльна Година',
      description: 'Насолоджуйтесь напоями та закусками',
      icon: Utensils,
    },
    {
      time: '18:00',
      event: 'Весільний Банкет',
      description: 'Вечеря, танці та святкування',
      icon: Music,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-cream-100 paper-texture overflow-hidden"
    >
      {/* Background floral decoration */}
      <div className="absolute top-20 right-0 w-64 md:w-96 opacity-20 pointer-events-none">
        <img
          src="/images/floral-hero.jpg"
          alt="Квітковий фон"
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
            Деталі Весілля
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-2">
            Святкування
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-blush-300"></span>
            <span className="w-2 h-2 rounded-full bg-sage-300"></span>
            <span className="w-12 h-px bg-blush-300"></span>
          </div>
        </div>

        {/* Venue image */}
        <div
          className={`relative max-w-4xl mx-auto mb-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative rounded-lg overflow-hidden shadow-elegant">
            <img
              src="/images/venue.jpg"
              alt="Місце проведення весілля"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-script text-2xl md:text-3xl">Садиба "Квітковий Сад"</p>
              <p className="font-body text-sm md:text-base opacity-90">
                вул. Квіткова 123, м. Київ, 01001
              </p>
            </div>
          </div>
        </div>

        {/* Schedule timeline */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-serif text-2xl md:text-3xl text-center text-foreground mb-10">
            Розклад Заходів
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-blush-200 md:-translate-x-px"></div>

            {schedule.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start md:items-center gap-6 mb-10 last:mb-0 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                {/* Icon circle */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-full bg-white shadow-soft flex items-center justify-center flex-shrink-0 ${
                    index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <item.icon className="w-6 h-6 text-blush-400" />
                </div>

                {/* Content */}
                <div
                  className={`flex-1 bg-white/70 backdrop-blur-sm rounded-lg p-5 shadow-soft ${
                    index % 2 === 0 ? 'md:order-2 md:text-left' : 'md:order-1 md:text-right'
                  }`}
                >
                  <span className="font-serif text-sm text-blush-400 uppercase tracking-wider">
                    {item.time}
                  </span>
                  <h4 className="font-serif text-xl text-foreground mt-1">
                    {item.event}
                  </h4>
                  <p className="font-body text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional info cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 transition-all duration-700 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-soft text-center">
            <Camera className="w-8 h-8 text-sage-400 mx-auto mb-3" />
            <h4 className="font-serif text-lg text-foreground">Фотографія</h4>
            <p className="font-body text-sm text-muted-foreground mt-2">
              Ми запрошуємо вас створювати спогади, але просимо утриматися від фото під час церемонії
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-soft text-center">
            <Utensils className="w-8 h-8 text-sage-400 mx-auto mb-3" />
            <h4 className="font-serif text-lg text-foreground">Вечеря</h4>
            <p className="font-body text-sm text-muted-foreground mt-2">
              Буде подано триступеневу вечерю з вегетаріанськими опціями
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-soft text-center">
            <Car className="w-8 h-8 text-sage-400 mx-auto mb-3" />
            <h4 className="font-serif text-lg text-foreground">Паркування</h4>
            <p className="font-body text-sm text-muted-foreground mt-2">
              Безкоштовне паркування з обслуговуванням біля входу до закладу
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
