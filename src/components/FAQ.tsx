import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      q: 'Как быстро я получу результат?',
      a: 'Расшифровка готовится автоматически и приходит через 2 минуты после загрузки анализа.'
    },
    {
      q: 'Можно ли доверять результатам?',
      a: 'Да. Алгоритм расшифровки разработан и протестирован группой врачей-ветеринаров. Основатель сервиса — врач с системным подходом к диагностике.'
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
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-violet-50 to-blue-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((item, i) => (
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
  );
};

export default FAQ;
