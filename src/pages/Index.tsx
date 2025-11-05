import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const eyeOffset = {
    x: (mousePosition.x - window.innerWidth / 2) / 50,
    y: (mousePosition.y - window.innerHeight / 2) / 50,
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/smartlab_bot', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl">🧪</div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
              Смарт Лаб
            </span>
          </div>
          <Button 
            onClick={handleTelegramClick}
            className="bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white"
          >
            <Icon name="Send" className="mr-2" size={18} />
            Перейти в бот
          </Button>
        </div>
      </header>

      {/* Hero Section */}
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
                разработанную командой врачей. Просто, быстро, надёжно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleTelegramClick}
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

            {/* Interactive Character */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-violet-200 to-blue-200 flex items-center justify-center animate-scale-in">
                {/* Cat Character */}
                <div className="text-9xl relative">
                  🐱
                  {/* Eyes following cursor */}
                  <div 
                    className="absolute top-12 left-16 w-3 h-3 bg-black rounded-full transition-transform duration-200"
                    style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}
                  />
                  <div 
                    className="absolute top-12 left-24 w-3 h-3 bg-black rounded-full transition-transform duration-200"
                    style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute top-8 right-8 animate-pulse">🩺</div>
                <div className="absolute bottom-12 left-8 animate-pulse delay-100">💉</div>
                <div className="absolute top-20 left-4 animate-pulse delay-200">📊</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Как это работает</h2>
            <p className="text-xl text-gray-600">Три простых шага до результата</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((item) => (
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

      {/* Trust Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-violet-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему нам доверяют</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-white">
              <div className="text-5xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-bold mb-3">Команда врачей</h3>
              <p className="text-gray-600">
                Расшифровка разработана и протестирована группой опытных специалистов
              </p>
            </Card>

            <Card className="p-8 text-center bg-white">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-3">Медицинская надёжность</h3>
              <p className="text-gray-600">
                Основатель — врач человеческой медицины. Системный подход к диагностике
              </p>
            </Card>

            <Card className="p-8 text-center bg-white">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Скорость и простота</h3>
              <p className="text-gray-600">
                Результат за 2 минуты. Без регистрации и сложных форм
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-xl text-gray-600">Выберите подходящий вариант</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((plan) => (
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
                  onClick={handleTelegramClick}
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

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-r from-violet-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Как быстро я получу результат?',
                a: 'Расшифровка готовится автоматически и приходит через 2 минуты после загрузки анализа.'
              },
              {
                q: 'Можно ли доверять результатам?',
                a: 'Да. Алгоритм расшифровки разработан и протестирован группой врачей. Основатель сервиса — врач человеческой медицины с системным подходом к диагностике.'
              },
              {
                q: 'Что входит в расшифровку?',
                a: 'Полный отчёт включает оценку критичности показателей, вероятные состояния, пошаговый план действий и детальное пояснение каждого параметра.'
              },
              {
                q: 'Нужна ли регистрация?',
                a: 'Нет. Просто перейдите в Telegram-бот и загрузите анализ. Никаких форм и сложных процедур.'
              },
              {
                q: 'Какие анализы можно расшифровать?',
                a: 'Сервис поддерживает расшифровку основных лабораторных анализов: биохимию крови, общий анализ крови, анализ мочи и другие распространённые виды исследований.'
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-lg border">
                <AccordionTrigger className="text-left font-semibold hover:text-violet-600">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-violet-600 to-blue-500 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы получить расшифровку?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Загрузите анализ прямо сейчас и получите результат через 2 минуты
          </p>
          <Button 
            onClick={handleTelegramClick}
            size="lg"
            className="bg-white text-violet-600 hover:bg-gray-100 text-lg px-12 py-6 hover-scale"
          >
            <Icon name="Send" className="mr-2" size={20} />
            Перейти в Telegram-бот
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-300">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">🧪</div>
                <span className="text-xl font-bold text-white">Смарт Лаб</span>
              </div>
              <p className="text-sm">
                Профессиональная расшифровка анализов вашего питомца за 2 минуты
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <a href="https://t.me/smartlab_support" className="block hover:text-white transition-colors">
                  Поддержка в Telegram
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Документы</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-white transition-colors">Политика конфиденциальности</a>
                <a href="#" className="block hover:text-white transition-colors">Публичная оферта</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Смарт Лаб. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
