import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun, Laptop, Save } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const themeOptions: Array<"light" | "dark" | "system"> = ["light", "dark", "system"];
    const currentIndex = themeOptions.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeOptions.length;
    setTheme(themeOptions[nextIndex]);
  };

  const handleSave = () => {
    setIsSaving(true);
    // Имитация сохранения проекта
    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-xl text-primary">DEMLITE SITES</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/builder" className="text-sm font-medium hover:text-primary transition-colors">
            Конструктор
          </Link>
          <Link to="/templates" className="text-sm font-medium hover:text-primary transition-colors">
            Шаблоны
          </Link>
          <Link to="/hosting" className="text-sm font-medium hover:text-primary transition-colors">
            Хостинг
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            onClick={handleSave} 
            variant="outline" 
            size="sm"
            className="gap-2"
            disabled={isSaving}
          >
            <Save className="size-4" />
            {isSaving ? "Сохранение..." : "Сохранить"}
          </Button>

          <button
            onClick={toggleTheme}
            className="size-9 inline-flex items-center justify-center rounded-md hover:bg-accent transition-colors"
            aria-label="Переключить тему"
          >
            {theme === "light" ? (
              <Sun className="size-5" />
            ) : theme === "dark" ? (
              <Moon className="size-5" />
            ) : (
              <Laptop className="size-5" />
            )}
          </button>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm">
              Войти
            </Button>
            <Button size="sm">Опубликовать</Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center size-9 rounded-md hover:bg-accent transition-colors"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container px-4 py-3 flex flex-col gap-2 animate-slide-up">
            <Link
              to="/"
              className="py-2 px-3 rounded-md hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/builder"
              className="py-2 px-3 rounded-md hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Конструктор
            </Link>
            <Link
              to="/templates"
              className="py-2 px-3 rounded-md hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Шаблоны
            </Link>
            <Link
              to="/hosting"
              className="py-2 px-3 rounded-md hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Хостинг
            </Link>
            <div className="flex gap-2 mt-2">
              <Button variant="outline" size="sm" className="flex-1">
                Войти
              </Button>
              <Button size="sm" className="flex-1">
                Опубликовать
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
