import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Globe, Settings } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="space-y-4 max-w-[85%] md:max-w-[70%]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent animate-slide-up">
              Создавайте потрясающие сайты без кода
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl max-w-[700px] mx-auto animate-slide-up animate-delay-100">
              Мощный конструктор с интуитивным интерфейсом и профессиональным хостингом. Воплотите свои идеи без ограничений.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-200">
            <Button size="lg" className="gap-2">
              Создать бесплатно
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" size="lg">
              Демо конструктора
            </Button>
          </div>

          <div className="relative w-full max-w-5xl overflow-hidden rounded-xl border bg-card shadow-xl animate-slide-up animate-delay-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-0"></div>
            
            <div className="flex space-x-2 p-3 border-b">
              <div className="size-3 rounded-full bg-red-500"></div>
              <div className="size-3 rounded-full bg-yellow-500"></div>
              <div className="size-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="relative z-10 grid grid-cols-12 min-h-[400px] md:min-h-[500px]">
              {/* Боковая панель */}
              <div className="col-span-3 border-r bg-secondary/50 p-3">
                <div className="flex flex-col gap-2">
                  <div className="h-8 rounded bg-primary/20 animate-pulse-subtle"></div>
                  <div className="h-24 rounded bg-background/80"></div>
                  <div className="h-8 rounded bg-primary/20 animate-pulse-subtle"></div>
                  <div className="h-32 rounded bg-background/80"></div>
                </div>
              </div>
              
              {/* Рабочая область */}
              <div className="col-span-9 p-3 bg-background/60">
                <div className="flex flex-col h-full gap-4">
                  <div className="h-10 w-full rounded bg-secondary"></div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="h-full rounded bg-secondary"></div>
                    <div className="grid grid-rows-2 gap-4">
                      <div className="rounded bg-secondary"></div>
                      <div className="rounded bg-secondary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl animate-slide-up animate-delay-300">
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="size-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <Globe className="size-6" />
              </div>
              <h3 className="text-lg font-semibold">Настоящий хостинг</h3>
              <p className="text-center text-muted-foreground">Публикация на собственном домене от нашей компании</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="size-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <Settings className="size-6" />
              </div>
              <h3 className="text-lg font-semibold">Гибкая настройка</h3>
              <p className="text-center text-muted-foreground">Неограниченные возможности для настройки дизайна</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="size-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <Code className="size-6" />
              </div>
              <h3 className="text-lg font-semibold">Без кода</h3>
              <p className="text-center text-muted-foreground">Интуитивный интерфейс для любого уровня подготовки</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
