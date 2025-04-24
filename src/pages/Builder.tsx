import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/ui/sidebar";
import { ElementsPanel } from "@/components/builder/ElementsPanel";
import { PropertiesPanel } from "@/components/builder/PropertiesPanel";
import { Canvas } from "@/components/builder/Canvas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Save, 
  Undo, 
  Redo, 
  Eye, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Palette, 
  Type, 
  Layout, 
  Image, 
  Loader2
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type DeviceType = "desktop" | "tablet" | "mobile";
type HistoryAction = { type: string; data: any };

// Интерфейс для элементов на холсте
interface CanvasElement {
  id: string;
  type: string;
  content: string;
  style: {
    [key: string]: string | number;
  };
  properties: {
    [key: string]: any;
  };
}

const Builder = () => {
  const [device, setDevice] = useState<DeviceType>("desktop");
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [history, setHistory] = useState<HistoryAction[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [canvasElements, setCanvasElements] = useState<CanvasElement[]>([]);
  const [activeTool, setActiveTool] = useState<string>("select");
  const { toast } = useToast();

  // Эффект для автосохранения
  useEffect(() => {
    const autosaveInterval = setInterval(() => {
      if (isDirty) {
        saveProject();
      }
    }, 30000); // Автосохранение каждые 30 секунд

    return () => clearInterval(autosaveInterval);
  }, [isDirty]);

  // Эффект для загрузки проекта при монтировании
  useEffect(() => {
    const savedProject = localStorage.getItem("demliteCurrentProject");
    if (savedProject) {
      try {
        const projectData = JSON.parse(savedProject);
        setCanvasElements(projectData.elements || []);
        toast({
          title: "Проект загружен",
          description: "Последняя сохраненная версия проекта успешно загружена.",
        });
      } catch (error) {
        console.error("Ошибка загрузки проекта:", error);
      }
    }
  }, []);

  // Сохранение перед закрытием страницы
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        saveProject();
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const saveProject = () => {
    setIsSaving(true);
    // Имитация сохранения с задержкой
    setTimeout(() => {
      try {
        const projectData = {
          lastSaved: new Date().toISOString(),
          elements: canvasElements,
        };
        localStorage.setItem("demliteCurrentProject", JSON.stringify(projectData));
        setIsDirty(false);
        toast({
          title: "Проект сохранен",
          description: "Все изменения успешно сохранены.",
        });
      } catch (error) {
        toast({
          title: "Ошибка сохранения",
          description: "Не удалось сохранить проект. Попробуйте снова.",
          variant: "destructive",
        });
      } finally {
        setIsSaving(false);
      }
    }, 800);
  };

  const addElement = (elementType: string) => {
    const newElement: CanvasElement = {
      id: `element-${Date.now()}`,
      type: elementType,
      content: elementType === "text" ? "Новый текст" : "",
      style: {
        position: "absolute",
        left: "100px",
        top: "100px",
        width: elementType === "text" ? "auto" : "200px",
        height: elementType === "text" ? "auto" : "100px",
      },
      properties: {
        src: elementType === "image" ? "/placeholder.svg" : "",
        link: "",
        alt: "",
      },
    };

    const newElements = [...canvasElements, newElement];
    setCanvasElements(newElements);
    setSelectedElement(newElement.id);
    addToHistory({ type: "ADD_ELEMENT", data: newElement });
    setIsDirty(true);
  };

  const updateElement = (id: string, updates: Partial<CanvasElement>) => {
    const updatedElements = canvasElements.map((el) =>
      el.id === id ? { ...el, ...updates } : el
    );
    setCanvasElements(updatedElements);
    addToHistory({ type: "UPDATE_ELEMENT", data: { id, updates } });
    setIsDirty(true);
  };

  const removeElement = (id: string) => {
    const elementToRemove = canvasElements.find(el => el.id === id);
    const filteredElements = canvasElements.filter((el) => el.id !== id);
    setCanvasElements(filteredElements);
    setSelectedElement(null);
    addToHistory({ type: "REMOVE_ELEMENT", data: elementToRemove });
    setIsDirty(true);
  };

  const addToHistory = (action: HistoryAction) => {
    // Если мы делаем новое действие посреди истории, обрезаем историю
    const newHistory = history.slice(0, historyIndex + 1);
    setHistory([...newHistory, action]);
    setHistoryIndex(newHistory.length);
  };

  const undo = () => {
    if (historyIndex >= 0) {
      // Реализация отмены в зависимости от типа действия
      // Для простоты, просто загружаем предыдущее состояние
      setHistoryIndex(historyIndex - 1);
      // Здесь должна быть логика применения действия отмены
      toast({
        title: "Отмена действия",
        description: "Последнее действие отменено.",
      });
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      // Реализация повтора в зависимости от типа действия
      setHistoryIndex(historyIndex + 1);
      // Здесь должна быть логика применения действия повтора
      toast({
        title: "Повтор действия",
        description: "Действие повторено.",
      });
    }
  };

  const publishSite = () => {
    setIsPublishing(true);
    // Имитация публикации
    setTimeout(() => {
      toast({
        title: "Сайт опубликован!",
        description: "Ваш сайт успешно опубликован на your-site.demlite.ru",
      });
      setIsPublishing(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      
      {/* Основной интерфейс конструктора */}
      <div className="flex flex-1 pt-16">
        {/* Левая панель - элементы */}
        <Sidebar className="w-64 border-r">
          <div className="p-4 h-full flex flex-col">
            <Tabs defaultValue="elements">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="elements">
                  <Layout className="size-4 mr-2" />
                  Блоки
                </TabsTrigger>
                <TabsTrigger value="components">
                  <Palette className="size-4 mr-2" />
                  Компоненты
                </TabsTrigger>
                <TabsTrigger value="media">
                  <Image className="size-4 mr-2" />
                  Медиа
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="elements" className="h-[calc(100vh-180px)] overflow-y-auto">
                <ElementsPanel onAddElement={addElement} />
              </TabsContent>
              
              <TabsContent value="components" className="h-[calc(100vh-180px)] overflow-y-auto">
                <div className="grid grid-cols-2 gap-3">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="p-2 border rounded-md hover:bg-accent cursor-pointer"
                      onClick={() => addElement("component")}
                    >
                      <div className="aspect-video rounded bg-muted mb-2"></div>
                      <div className="text-xs font-medium">Компонент {i + 1}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="media" className="h-[calc(100vh-180px)] overflow-y-auto">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" onClick={() => addElement("image")}>
                    <Image className="size-4 mr-2" />
                    Добавить изображение
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-md bg-muted overflow-hidden cursor-pointer"
                        onClick={() => addElement("image")}
                      >
                        <img
                          src={`/placeholder.svg`}
                          alt={`Media ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Sidebar>

        {/* Центральная часть - холст */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Панель инструментов */}
          <div className="h-12 border-b flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={undo}
                      disabled={historyIndex < 0}
                    >
                      <Undo className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Отменить (Ctrl+Z)</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={redo}
                      disabled={historyIndex >= history.length - 1}
                    >
                      <Redo className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Повторить (Ctrl+Y)</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <div className="w-px h-6 bg-border mx-2"></div>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setDevice("desktop")}
                      className={device === "desktop" ? "bg-accent" : ""}
                    >
                      <Monitor className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Десктоп</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setDevice("tablet")}
                      className={device === "tablet" ? "bg-accent" : ""}
                    >
                      <Tablet className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Планшет</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setDevice("mobile")}
                      className={device === "mobile" ? "bg-accent" : ""}
                    >
                      <Smartphone className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Мобильный</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <div className="w-px h-6 bg-border mx-2"></div>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        window.open('/preview', '_blank');
                      }}
                    >
                      <Eye className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Предпросмотр</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={saveProject}
                disabled={isSaving || !isDirty}
              >
                {isSaving ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />}
                {isSaving ? "Сохранение..." : "Сохранить"}
              </Button>

              <Button
                size="sm"
                className="gap-2"
                onClick={publishSite}
                disabled={isPublishing}
              >
                {isPublishing ? <Loader2 className="size-4 animate-spin" /> : null}
                {isPublishing ? "Публикация..." : "Опубликовать"}
              </Button>
            </div>
          </div>

          {/* Холст */}
          <div className="flex-1 overflow-auto bg-accent/10 p-8 flex justify-center">
            <div
              className={`bg-background transition-all duration-300 shadow-md ${
                device === "desktop"
                  ? "w-full max-w-6xl"
                  : device === "tablet"
                  ? "w-[768px]"
                  : "w-[375px]"
              }`}
            >
              <Canvas
                elements={canvasElements}
                selectedElement={selectedElement}
                onSelectElement={setSelectedElement}
                onUpdateElement={updateElement}
                onRemoveElement={removeElement}
              />
            </div>
          </div>
        </div>

        {/* Правая панель - свойства */}
        <Sidebar className="w-72 border-l">
          <div className="p-4 h-full flex flex-col">
            <h3 className="font-semibold mb-4">Свойства</h3>
            <PropertiesPanel
              selectedElement={selectedElement ? canvasElements.find(el => el.id === selectedElement) : null}
              onUpdateElement={updateElement}
            />
          </div>
        </Sidebar>
      </div>
    </div>
  );
};

export default Builder;
