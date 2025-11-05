import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FinalCTAProps {
  onTelegramClick: () => void;
}

const FinalCTA = ({ onTelegramClick }: FinalCTAProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-violet-600 to-blue-500 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Готовы получить расшифровку?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Загрузите анализ прямо сейчас и получите результат через 2 минуты
        </p>
        <Button 
          onClick={onTelegramClick}
          size="lg"
          className="bg-white text-violet-600 hover:bg-gray-100 text-lg px-12 py-6 hover-scale"
        >
          <Icon name="Send" className="mr-2" size={20} />
          Перейти в Telegram-бот
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
