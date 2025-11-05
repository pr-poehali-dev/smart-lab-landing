import { Card } from '@/components/ui/card';

const TrustSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-violet-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Почему нам доверяют</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center bg-white">
            <div className="text-5xl mb-4">👨‍⚕️</div>
            <h3 className="text-xl font-bold mb-3">Команда ветеринаров</h3>
            <p className="text-gray-600">
              Расшифровка разработана и протестирована группой опытных врачей-ветеринаров
            </p>
          </Card>

          <Card className="p-8 text-center bg-white">
            <div className="mb-4 flex justify-center">
              <img 
                src="https://cdn.poehali.dev/files/f8fba307-c032-4e0c-8d39-f4bf75e7f932.jpg" 
                alt="Основатель" 
                className="w-20 h-20 rounded-full object-cover border-4 border-violet-200"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Основатель — врач</h3>
            <p className="text-gray-600">
              Системный подход к диагностике с медицинским образованием
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
  );
};

export default TrustSection;
