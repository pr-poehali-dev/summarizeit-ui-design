import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import LoginForm from "@/components/LoginForm";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (showLogin && !isLoggedIn) {
    return (
      <LoginForm
        onLogin={() => setIsLoggedIn(true)}
        onBack={() => setShowLogin(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation isLoggedIn={isLoggedIn} onLogin={() => setShowLogin(true)} />

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">SummarizeIT</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Автоматическая суммаризация текстов с помощью ИИ и интеграция с
            Telegram
          </p>
          <div className="flex justify-center gap-4">
            <Badge
              variant="outline"
              className="text-purple-600 border-purple-200"
            >
              <Icon name="Bot" size={16} className="mr-2" />
              ИИ Суммаризация
            </Badge>
            <Badge variant="outline" className="text-blue-600 border-blue-200">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Telegram API
            </Badge>
            <Badge
              variant="outline"
              className="text-green-600 border-green-200"
            >
              <Icon name="Users" size={16} className="mr-2" />
              Управление проектами
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Icon name="FileText" size={20} className="text-purple-600" />
                </div>
                Создание проектов
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Создавайте проекты с настраиваемыми промптами для суммаризации
                текстов
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon
                    name="MessageSquare"
                    size={20}
                    className="text-blue-600"
                  />
                </div>
                Telegram интеграция
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Подключайте чаты Telegram для автоматической обработки сообщений
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Icon name="BarChart3" size={20} className="text-green-600" />
                </div>
                Аналитика
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Отслеживайте статистику обработки и качество суммаризации
              </p>
            </CardContent>
          </Card>
        </div>

        {!isLoggedIn && (
          <div className="text-center">
            <Button
              onClick={() => setShowLogin(true)}
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
            >
              Начать работу
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        )}

        {isLoggedIn && (
          <div className="text-center">
            <Card className="max-w-md mx-auto border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-green-600">
                  Добро пожаловать!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Вы успешно вошли в систему</p>
                <Button variant="outline" className="w-full">
                  Перейти в личный кабинет
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
