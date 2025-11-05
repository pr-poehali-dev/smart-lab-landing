import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const HowItWorks = () => {
  const steps = [
    {
      icon: 'Upload',
      emoji: '📸',
      step: '1',
      title: 'Загрузите анализ',
      description: 'Сфотографируйте или загрузите данные анализа в Telegram-бот'
    },
    {
      icon: 'Zap',
      emoji: '⚡',
      step: '2',
      title: 'Получите расшифровку',
      description: 'Через 2 минуты получите полный отчёт с оценкой критичности'
    },
    {
      icon: 'ClipboardCheck',
      emoji: '✅',
      step: '3',
      title: 'Действуйте',
      description: 'Следуйте пошаговому плану, разработанному врачами'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Как это работает</h2>
          <p className="text-xl text-gray-600">Три простых шага до результата</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <Card key={item.step} className="p-8 text-center hover-scale border-2 hover:border-violet-300 transition-all">
              <div className="relative mb-6">
                <div className="text-6xl mb-4">{item.emoji}</div>
                <Badge className="absolute -top-2 -right-2 bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  {item.step}
                </Badge>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
