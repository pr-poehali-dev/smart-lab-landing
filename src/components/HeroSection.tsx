import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onTelegramClick: () => void;
  eyeOffset: { x: number; y: number };
}

const HeroSection = ({ onTelegramClick, eyeOffset }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-200">
              Расшифровка за 2 минуты
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Расшифровка анализов{' '}
              <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                вашего питомца
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Загрузите фото анализа в Telegram-бот и получите полную расшифровку, 
              разработанную командой врачей-ветеринаров. Просто, быстро, надёжно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onTelegramClick}
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white text-lg px-8 py-6 hover-scale"
              >
                <Icon name="Send" className="mr-2" size={20} />
                Начать сейчас
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Как это работает
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="Users" className="text-violet-600" size={20} />
                <span className="text-sm text-gray-600">2000+ владельцев</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" className="text-violet-600" size={20} />
                <span className="text-sm text-gray-600">4.9 рейтинг</span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-violet-200 to-blue-200 flex items-center justify-center animate-scale-in">
              <div className="text-9xl relative">
                🐱
                <div 
                  className="absolute top-12 left-16 w-3 h-3 bg-black rounded-full transition-transform duration-200"
                  style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}
                />
                <div 
                  className="absolute top-12 left-24 w-3 h-3 bg-black rounded-full transition-transform duration-200"
                  style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}
                />
              </div>
              <div className="absolute top-8 right-8 animate-pulse">🩺</div>
              <div className="absolute bottom-12 left-8 animate-pulse delay-100">💉</div>
              <div className="absolute top-20 left-4 animate-pulse delay-200">📊</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
