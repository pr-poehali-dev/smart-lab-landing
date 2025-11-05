const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/eee3f108-2c14-45ab-9a23-0123f5373c87.png" 
                alt="Смарт Лаб" 
                className="h-8 w-auto"
              />
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
  );
};

export default Footer;
