import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout, PanelLeft, Palette, FileCode, Layers, Folder, Server, Wand2, Globe } from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Возможности
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Всё необходимое для создания идеального сайта
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px]">
            Наш конструктор сайтов предоставляет все инструменты для реализации ваших идей
          </p>
        </div>

        <Tabs defaultValue="editor" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 w-full mb-8">
            <TabsTrigger value="editor" className="py-3">
              <Layout className="mr-2 size-4" />
              Редактор
            </TabsTrigger>
            <TabsTrigger value="templates" className="py-3">
              <Layers className="mr-2 size-4" />
              Шаблоны
            </TabsTrigger>
            <TabsTrigger value="hosting" className="py-3">
              <Server className="mr-2 size-4" />
              Хостинг
            </TabsTrigger>
          </TabsList>

          <TabsContent value="editor" className="mt-0 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                      <PanelLeft className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Удобный интерфейс</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Перетаскивайте элементы в редакторе и создавайте структуру вашего сайта с легкостью.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                      <Palette className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Настройка стилей</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Используйте встроенные инструменты для настройки цветов, шрифтов и других элементов дизайна.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                      <FileCode className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Расширенная настройка</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Опытные пользователи могут добавлять собственный код HTML, CSS и JavaScript.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border bg-card shadow-md overflow-hidden">
                <div className="flex items-center justify-between border-b p-3">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-red-500"></div>
                    <div className="size-3 rounded-full bg-yellow-500"></div>
                    <div className="size-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-6 w-48 rounded-md bg-muted"></div>
                  <div></div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                      <div className="space-y-2">
                        <div className="h-6 w-full rounded bg-primary/20 animate-pulse-subtle"></div>
                        <div className="h-28 w-full rounded bg-muted"></div>
                        <div className="h-6 w-full rounded bg-primary/20 animate-pulse-subtle"></div>
                        <div className="h-28 w-full rounded bg-muted"></div>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="grid grid-cols-3 gap-3 h-full">
                        <div className="col-span-2 h-full rounded bg-secondary animate-float"></div>
                        <div className="col-span-1 space-y-3">
                          <div className="h-1/2 rounded bg-secondary"></div>
                          <div className="h-1/2 rounded bg-secondary"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="templates" className="mt-0 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-lg bg-card border shadow-sm overflow-hidden">
                    <div className="h-2/3 bg-gradient-to-br from-primary/30 to-accent/30"></div>
                    <div className="p-3 space-y-2">
                      <div className="h-4 w-2/3 rounded bg-muted"></div>
                      <div className="h-3 w-full rounded bg-muted"></div>
                      <div className="h-3 w-4/5 rounded bg-muted"></div>
                    </div>
                  </div>
                  <div className="aspect-[3/4] rounded-lg bg-card border shadow-sm overflow-hidden animate-float">
                    <div className="h-2/3 bg-gradient-to-br from-accent-foreground/30 to-primary/30"></div>
                    <div className="p-3 space-y-2">
                      <div className="h-4 w-2/3 rounded bg-muted"></div>
                      <div className="h-3 w-full rounded bg-muted"></div>
                      <div className="h-3 w-4/5 rounded bg-muted"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[3/4] rounded-lg bg-card border shadow-sm overflow-hidden animate-float">
                    <div className="h-2/3 bg-gradient-to-tr from-primary/30 to-accent/30"></div>
                    <div className="p-3 space-y-2">
                      <div className="h-4 w-2/3 rounded bg-muted"></div>
                      <div className="h-3 w-full rounded bg-muted"></div>
                      <div className="h-3 w-4/5 rounded bg-muted"></div>
                    </div>
                  </div>
                  <div className="aspect-[3/4] rounded-lg bg-card border shadow-sm overflow-hidden">
                    <div className="h-2/3 bg-gradient-to-bl from-accent-foreground/30 to-primary/30"></div>
                    <div className="p-3 space-y-2">
                      <div className="h-4 w-2/3 rounded bg-muted"></div>
                      <div className="h-3 w-full rounded bg-muted"></div>
                      <div className="h-3 w-4/5 rounded bg-muted"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2 text-left space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                      <Layout className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Готовые шаблоны</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Более 100 профессиональных шаблонов для различных ниш и сфер бизнеса.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                      <Folder className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Категории шаблонов</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Легкий выбор подходящего шаблона благодаря удобной категоризации.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                      <Wand2 className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Полная кастомизация</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Каждый шаблон можно полностью настроить под ваши потребности и брендинг.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hosting" className="mt-0 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                      <Server className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Надежный хостинг</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Быстрый и надежный хостинг с гарантией безопасности и доступности вашего сайта 24/7.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                      <Globe className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Собственный домен</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Бесплатный домен от нашей компании или возможность подключить свой собственный.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                      <FileCode className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Сохранение проектов</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Автоматическое сохранение ваших проектов и возможность создания резервных копий.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border bg-card shadow-md p-6 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-10 -mt-10 animate-pulse-subtle"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full -ml-16 -mb-16 animate-pulse-subtle"></div>
                
                <div className="relative space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="size-10 flex items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Globe className="size-5" />
                    </div>
                    <div className="h-8 rounded-full bg-secondary w-48"></div>
                  </div>
                  <div className="h-4 w-full rounded bg-secondary"></div>
                  <div className="h-4 w-5/6 rounded bg-secondary"></div>
                </div>

                <div className="grid grid-cols-2 gap-4 relative">
                  <div className="p-4 rounded-lg border bg-background space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="h-6 w-20 rounded bg-secondary"></div>
                      <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="size-4 rounded-full bg-primary animate-pulse-subtle"></div>
                      </div>
                    </div>
                    <div className="h-3 w-full rounded bg-secondary"></div>
                    <div className="h-3 w-2/3 rounded bg-secondary"></div>
                  </div>
                  
                  <div className="p-4 rounded-lg border bg-background space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="h-6 w-20 rounded bg-secondary"></div>
                      <div className="size-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <div className="size-4 rounded-full bg-accent-foreground animate-pulse-subtle"></div>
                      </div>
                    </div>
                    <div className="h-3 w-full rounded bg-secondary"></div>
                    <div className="h-3 w-2/3 rounded bg-secondary"></div>
                  </div>
                </div>

                <div className="p-4 rounded-lg border bg-background space-y-3 relative">
                  <div className="h-6 w-32 rounded bg-secondary"></div>
                  <div className="grid grid-cols-6 gap-2">
                    <div className="h-8 col-span-1 rounded bg-secondary"></div>
                    <div className="h-8 col-span-2 rounded bg-primary/20 animate-pulse-subtle"></div>
                    <div className="h-8 col-span-1 rounded bg-secondary"></div>
                    <div className="h-8 col-span-2 rounded bg-accent/20 animate-pulse-subtle"></div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Features;
