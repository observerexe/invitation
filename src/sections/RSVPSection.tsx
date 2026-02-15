import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Send, Check, Users, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const RSVPSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', message: '', success: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '1',
    dietary: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.attendance) {
      setDialogContent({
        title: 'Неповна Інформація',
        message: 'Будь ласка, заповніть всі обов\'язкові поля.',
        success: false,
      });
      setShowDialog(true);
      return;
    }

    setDialogContent({
      title: 'Дякуємо!',
      message: formData.attendance === 'yes' 
        ? `Ми з нетерпінням чекаємо на святкування разом з вами, ${formData.name}!`
        : `Шкода, що ви не зможете прийти, ${formData.name}. Ми будемо сумувати!`,
      success: true,
    });
    setShowDialog(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      attendance: '',
      guests: '1',
      dietary: '',
      message: '',
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-cream-100 paper-texture overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 floral-pattern opacity-50"></div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-48 md:w-72 opacity-40 pointer-events-none">
        <img
          src="/images/floral-corner.png"
          alt="Квіткова декорація"
          className="w-full h-auto transform -scale-x-100"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-48 md:w-72 opacity-40 pointer-events-none transform rotate-180">
        <img
          src="/images/floral-corner.png"
          alt="Квіткова декорація"
          className="w-full h-auto"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-script text-3xl md:text-4xl text-blush-400">
            RSVP
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-2">
            Чи Приєднаєтесь Ви До Нас?
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-lg mx-auto">
            Будь ласка, повідомте нас, чи зможете ви розділити цей особливий день з нами.
            Ми будемо вдячні за вашу відповідь до 1 травня 2025 року.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-blush-300"></span>
            <Heart className="w-4 h-4 text-blush-300 fill-blush-200" />
            <span className="w-12 h-px bg-blush-300"></span>
          </div>
        </div>

        {/* RSVP Form */}
        <div
          className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-elegant p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-serif text-foreground">
                    Повне Ім'я <span className="text-blush-400">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ваше ім'я"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-blush-200 focus:border-blush-400 focus:ring-blush-200 font-body"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-serif text-foreground">
                    Email <span className="text-blush-400">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-blush-200 focus:border-blush-400 focus:ring-blush-200 font-body"
                  />
                </div>
              </div>

              {/* Attendance */}
              <div className="space-y-3">
                <Label className="font-serif text-foreground">
                  Чи будете ви присутні? <span className="text-blush-400">*</span>
                </Label>
                <RadioGroup
                  value={formData.attendance}
                  onValueChange={(value) => setFormData({ ...formData, attendance: value })}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <div className="flex items-center space-x-2 bg-sage-50 rounded-lg p-4 flex-1 cursor-pointer hover:bg-sage-100 transition-colors">
                    <RadioGroupItem value="yes" id="yes" className="text-sage-500" />
                    <Label htmlFor="yes" className="cursor-pointer font-body flex items-center gap-2">
                      <Check className="w-4 h-4 text-sage-500" />
                      З Радістю Приймаю
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-blush-50 rounded-lg p-4 flex-1 cursor-pointer hover:bg-blush-100 transition-colors">
                    <RadioGroupItem value="no" id="no" className="text-blush-500" />
                    <Label htmlFor="no" className="cursor-pointer font-body flex items-center gap-2">
                      <X className="w-4 h-4 text-blush-500" />
                      На Жаль, Не Можу
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Number of guests */}
              {formData.attendance === 'yes' && (
                <div
                  className={`space-y-2 animate-fade-in-up ${
                    formData.attendance === 'yes' ? 'block' : 'hidden'
                  }`}
                >
                  <Label htmlFor="guests" className="font-serif text-foreground flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Кількість Гостей
                  </Label>
                  <select
                    id="guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full h-10 px-3 rounded-md border border-blush-200 bg-white focus:border-blush-400 focus:ring-2 focus:ring-blush-200 font-body"
                  >
                    <option value="1">1 Гість</option>
                    <option value="2">2 Гості</option>
                    <option value="3">3 Гості</option>
                    <option value="4">4 Гості</option>
                  </select>
                </div>
              )}

              {/* Dietary restrictions */}
              {formData.attendance === 'yes' && (
                <div
                  className={`space-y-2 animate-fade-in-up ${
                    formData.attendance === 'yes' ? 'block' : 'hidden'
                  }`}
                >
                  <Label htmlFor="dietary" className="font-serif text-foreground">
                    Дієтичні Обмеження
                  </Label>
                  <Input
                    id="dietary"
                    type="text"
                    placeholder="Вегетаріанець, алергії тощо"
                    value={formData.dietary}
                    onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                    className="border-blush-200 focus:border-blush-400 focus:ring-blush-200 font-body"
                  />
                </div>
              )}

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="font-serif text-foreground">
                  Повідомлення для Пари (Необов'язково)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Поділіться своїми побажаннями..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-blush-200 focus:border-blush-400 focus:ring-blush-200 font-body min-h-[100px] resize-none"
                />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full bg-blush-400 hover:bg-blush-500 text-white font-serif text-lg py-6 rounded-lg transition-all duration-300 hover:shadow-glow"
              >
                <Send className="w-5 h-5 mr-2" />
                Надіслати RSVP
              </Button>
            </form>
          </div>
        </div>

        {/* Contact info */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-body text-muted-foreground">
            Питання? Зв'яжіться з нами за адресою{' '}
            <a
              href="mailto:wedding@emmarose-james.com"
              className="text-blush-400 hover:text-blush-500 underline"
            >
              wedding@emmarose-james.com
            </a>
          </p>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-white/95 backdrop-blur-sm border-blush-200">
          <DialogHeader className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-blush-100 flex items-center justify-center mb-4">
              {dialogContent.success ? (
                <Heart className="w-8 h-8 text-blush-400 fill-blush-400" />
              ) : (
                <X className="w-8 h-8 text-blush-400" />
              )}
            </div>
            <DialogTitle className="font-serif text-2xl text-foreground">
              {dialogContent.title}
            </DialogTitle>
            <DialogDescription className="font-body text-muted-foreground text-lg">
              {dialogContent.message}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RSVPSection;
