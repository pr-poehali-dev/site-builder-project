import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, MousePointer2, Rows3, ArrowRight } from "lucide-react";

const Demo = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNextStep = () => {
    setActiveStep((prev) => (prev < 3 ? prev + 1 : 1));
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Как это работает
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Создайте сайт за три простых шага
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px]">
            Наш интуитивно понятный интерфейс делает создание сайта легким процессом
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => setActiveStep(1)}
              className={`flex flex-col items-center gap-3 p-4 rounded-lg transition-all ${
                activeStep === 1
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent hover:bg-accent/80"
              }`}
            >
              <div className="size-10 rounded-full bg-background/20 flex items-center justify-center">
                <Rows3 className="size-5" />
              </div>
              <div className="text-center">
                <div className="font-medium">Шаг 1</div>
                <div className="text-sm mt-1">Выберите шаблон</div>
              </div>
            </button>

            <button
              onClick={() => setActiveStep(2)}
              className={`flex flex-col items-center gap-3 p-4 rounded-lg transition-all ${
                activeStep === 2
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent hover:bg-accent/80"
              }`}
            >
              <div className="size-10 rounded-full bg-background/20 flex items-center justify-center">
                <MousePointer2 className="size-5" />
              </div>
              <div className="text-center">
                <div className="font-medium">Шаг 2</div>
                <div className="text-sm mt-1">Настройте дизайн</div>
              </div>
            </button>

            <button
              onClick={() => setActiveStep(3)}
              className={`flex flex-col items-center gap-3 p-4 rounded-lg transition-all ${
                activeStep === 3
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent hover:bg-accent/80"
              }`}
            >
              <div className="size-10 rounded-full bg-background/20 flex items-center justify-center">
                <CheckCircle2 className="size-5" />
              </div>
              <div className="text-center">
                <div className="font-medium">Шаг 3</div>
                <div className="text-sm mt-1">Опубликуйте сайт</div>
              </div>
            </button>
          </div>

          <div className="relative overflow-hidden rounded-xl border bg-card shadow-lg">
            {activeStep === 1 && (
              <div className="animate-slide-up">
                <div className="p-4 bg-muted/50 border-b flex items-center justify-between">
                  <h3 className="font-medium">Галерея шаблонов</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-32 rounded bg-secondary"></div>
                    <div className="h-8 w-8 rounded bg-primary"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className={`aspect-[3/4] rounded-lg overflow-hidden border ${
                          i === 1 ? "ring-2 ring-primary ring-offset-2" : ""
                        }`}
                      >
                        <div
                          className={`h-2/3 ${
                            i % 2 === 0
                              ? "bg-gradient-to-br from-primary/30 to-accent/30"
                              : "bg-gradient-to-tr from-accent-foreground/30 to-primary/30"
                          }`}
                        ></div>
                        <div className="p-3 space-y-2 bg-card">
                          <div className="h-4 w-2/3 rounded bg-muted"></div>
                          <div className="h-3 w-full rounded bg-muted"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="animate-slide-up">
                <div className="p-4 bg-muted/50 border-b flex items-center justify-between">
                  <h3 className="font-medium">Редактор сайта</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-20 rounded bg-secondary"></div>
                    <div className="h-8 w-20 rounded bg-primary"></div>
                  </div>
                </div>
                <div className="flex h-[400px]">
                  <div className="w-64 border-r p-3 space-y-3">
                    <div className="h-8 rounded bg-secondary"></div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-20 rounded bg-secondary"></div>
                      <div className="h-20 rounded bg-secondary"></div>
                      <div className="h-20 rounded bg-secondary"></div>
                      <div className="h-20 rounded bg-secondary"></div>
                    </div>
                  </div>
                  <div className="flex-1 p-3">
                    <div className="h-full rounded border flex items-center justify-center">
                      <div className="max-w-md p-6 space-y-4">
                        <div className="h-8 w-3/4 rounded bg-primary/20 animate-pulse-subtle"></div>
                        <div className="h-4 w-full rounded bg-secondary"></div>
                        <div className="h-4 w-5/6 rounded bg-secondary"></div>
                        <div className="h-10 w-32 rounded bg-primary/20 animate-pulse-subtle"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-80 border-l p-3 space-y-3">
                    <div className="h-8 rounded bg-secondary"></div>
                    <div className="space-y-2">
                      <div className="h-6 rounded bg-secondary"></div>
                      <div className="h-10 rounded bg-muted"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-6 rounded bg-secondary"></div>
                      <div className="flex gap-2">
                        <div className="h-8 w-8 rounded bg-primary"></div>
                        <div className="h-8 w-8 rounded bg-secondary"></div>
                        <div className="h-8 w-8 rounded bg-secondary"></div>
                        <div className="h-8 w-8 rounded bg-secondary"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="animate-slide-up p-6">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                  <div className="size-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold">Готово к публикации!</h3>
                    <p className="text-muted-foreground">
                      Ваш сайт готов и может быть опубликован по вашему собственному домену
                    </p>
                  </div>
                  <div className="px-6 py-4 rounded-lg border bg-card/50">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Globe className="size-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-muted-foreground">Ваш домен</div>
                        <div className="font-medium">вашсайт.мастер-веб.рф</div>
                      </div>
                      <div className="ml-auto">
                        <Button variant="outline" size="sm">
                          Изменить
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-6" size="lg">
                    Опубликовать сайт
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center mt-8">
            <Button
              onClick={handleNextStep}
              variant="outline"
              className="gap-2"
            >
              {activeStep === 3 ? "Начать сначала" : "Следующий шаг"}
              {activeStep === 3 ? (
                <ArrowRight className="size-4" />
              ) : (
                <ChevronRight className="size-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
