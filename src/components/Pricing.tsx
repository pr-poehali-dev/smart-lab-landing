import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface PricingProps {
  onTelegramClick: () => void;
}

const Pricing = ({ onTelegramClick }: PricingProps) => {
  const plans = [
    {
      name: 'Разовая',
      price: '199',
      description: 'Одна расшифровка',
      features: ['Полный отчёт', 'Оценка критичности', 'Пошаговый план']
    },
    {
      name: 'Пакет',
      price: '249',
      description: '3 расшифровки',
      features: ['Полный отчёт', 'Оценка критичности', 'Пошаговый план', 'Экономия 30%'],
      popular: true
    },
    {
      name: 'Безлимит',
      price: '399',
      description: 'Месяц без ограничений',
      features: ['Полный отчёт', 'Оценка критичности', 'Пошаговый план', 'Неограниченно']
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Тарифы</h2>
          <p className="text-xl text-gray-600">Выберите подходящий вариант</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`p-8 relative ${plan.popular ? 'border-2 border-violet-500 shadow-xl scale-105' : ''}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white">
                  Популярный
                </Badge>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">₽</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Icon name="Check" className="text-violet-600" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={onTelegramClick}
                className={`w-full ${plan.popular ? 'bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white' : ''}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                Выбрать тариф
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
