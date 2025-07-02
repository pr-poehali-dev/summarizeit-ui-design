import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface NavigationProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

const Navigation = ({ isLoggedIn, onLogin }: NavigationProps) => {
  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SummarizeIT</span>
          </div>

          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="sm">
                  <Icon name="User" size={16} className="mr-2" />
                  Профиль
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Settings" size={16} className="mr-2" />
                  Проекты
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Shield" size={16} className="mr-2" />
                  Админ
                </Button>
              </>
            ) : (
              <Button
                onClick={onLogin}
                variant="outline"
                size="sm"
                className="text-purple-600 border-purple-200 hover:bg-purple-50"
              >
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
