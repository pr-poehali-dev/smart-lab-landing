import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onTelegramClick: () => void;
}

const Header = ({ onTelegramClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://cdn.poehali.dev/files/eee3f108-2c14-45ab-9a23-0123f5373c87.png" 
            alt="Смарт Лаб" 
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
            Смарт Лаб
          </span>
        </div>
        <Button 
          onClick={onTelegramClick}
          className="bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white"
        >
          <Icon name="Send" className="mr-2" size={18} />
          Перейти в бот
        </Button>
      </div>
    </header>
  );
};

export default Header;
