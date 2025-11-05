import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ReportExample = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Что вы получите</h2>
          <p className="text-xl text-gray-600">Полная расшифровка с детальным анализом</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-violet-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Оценка критичности</h3>
                  <p className="text-gray-600">
                    Каждый показатель оценивается по степени важности: норма, внимание, критично
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-blue-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🔍</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Детальная расшифровка</h3>
                  <p className="text-gray-600">
                    Понятное объяснение каждого параметра и что он означает для здоровья питомца
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-green-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📋</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">План действий</h3>
                  <p className="text-gray-600">
                    Конкретные рекомендации: что делать дальше, к какому специалисту обратиться
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-orange-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🩺</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Вероятные состояния</h3>
                  <p className="text-gray-600">
                    Возможные причины отклонений и связь между различными показателями
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-violet-100 to-blue-100 rounded-2xl p-8 shadow-lg">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b">
                  <span className="font-bold text-lg">Биохимия крови</span>
                  <Badge className="bg-green-500 text-white">Готово</Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm">Гемоглобин</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">145 г/л</span>
                      <Badge variant="outline" className="text-xs bg-green-100 text-green-700">Норма</Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="text-sm">Глюкоза</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">6.8 ммоль/л</span>
                      <Badge variant="outline" className="text-xs bg-yellow-100 text-yellow-700">Внимание</Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm">Креатинин</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">98 мкмоль/л</span>
                      <Badge variant="outline" className="text-xs bg-green-100 text-green-700">Норма</Badge>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-xs text-gray-500">📊 Проанализировано 24 показателя</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportExample;
