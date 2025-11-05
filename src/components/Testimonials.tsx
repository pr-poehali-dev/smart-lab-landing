import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Мария',
      pet: 'Кот Барсик',
      text: 'Получила расшифровку за 2 минуты! Все понятно объяснили, что делать дальше. Очень помогло перед визитом к ветеринару.',
      rating: 5
    },
    {
      name: 'Алексей',
      pet: 'Собака Джек',
      text: 'Отличный сервис! Больше не нужно гуглить каждый показатель. Сразу видно, что критично, а что в норме.',
      rating: 5
    },
    {
      name: 'Елена',
      pet: 'Кошка Муся',
      text: 'Взяла безлимит на месяц — очень удобно для контроля хронического заболевания. Рекомендую!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-violet-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Отзывы владельцев</h2>
          <p className="text-xl text-gray-600">Более 2000 довольных пользователей</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <Card key={i} className="p-6 bg-white">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 flex items-center justify-center text-white font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.pet}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-full px-8 py-4 shadow-md">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                2000+
              </div>
              <div className="text-sm text-gray-600">Владельцев</div>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                4.9
              </div>
              <div className="text-sm text-gray-600">Рейтинг</div>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                5000+
              </div>
              <div className="text-sm text-gray-600">Расшифровок</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
