const FounderSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-200 to-blue-200 rounded-3xl opacity-30 blur-xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/f8fba307-c032-4e0c-8d39-f4bf75e7f932.jpg" 
                alt="Основатель Смарт Лаб" 
                className="relative rounded-2xl w-full object-cover shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div className="inline-block">
              <span className="px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold">
                О создателе
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Системный подход{' '}
              <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                к диагностике
              </span>
            </h2>

            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Основатель Смарт Лаб — врач с медицинским образованием, который применил 
                системный подход из человеческой медицины к ветеринарной диагностике.
              </p>
              
              <p>
                Совместно с командой опытных ветеринаров мы создали сервис, который помогает 
                владельцам животных быстро понимать результаты анализов и принимать правильные решения.
              </p>

              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🎓</div>
                  <div>
                    <div className="font-semibold">Медицинское образование</div>
                    <div className="text-gray-600 text-base">Системный подход к анализу показателей</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">🔬</div>
                  <div>
                    <div className="font-semibold">Работа с ветеринарами</div>
                    <div className="text-gray-600 text-base">Тесное сотрудничество с профильными специалистами</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">💡</div>
                  <div>
                    <div className="font-semibold">Забота о питомцах</div>
                    <div className="text-gray-600 text-base">Миссия — сделать диагностику доступной каждому</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
