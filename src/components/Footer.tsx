import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo-b.svg" alt="Веб-Мастер" className="h-8 w-auto" />
              <span className="font-bold text-xl text-primary">Веб-Мастер</span>
            </Link>
            <p className="text-muted-foreground">
              Создавайте потрясающие сайты без навыков программирования
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-8">
            <div className="space-y-3">
              <h3 className="font-medium text-lg">Продукт</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Возможности
                  </Link>
                </li>
                <li>
                  <Link to="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
                    Шаблоны
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Тарифы
                  </Link>
                </li>
                <li>
                  <Link to="/updates" className="text-muted-foreground hover:text-foreground transition-colors">
                    Обновления
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium text-lg">Компания</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                    Блог
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                    Вакансии
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium text-lg">Поддержка</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                    Центр помощи
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                    Документация
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                    Частые вопросы
                  </Link>
                </li>
                <li>
                  <Link to="/status" className="text-muted-foreground hover:text-foreground transition-colors">
                    Статус сервиса
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t gap-4">
          <div className="text-sm text-muted-foreground order-2 md:order-1">
            © 2024 Веб-Мастер. Все права защищены.
          </div>
          
          <div className="flex gap-6 order-1 md:order-2">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Условия использования
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
