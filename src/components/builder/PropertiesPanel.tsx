import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  Link, 
  Trash2, 
  Copy 
} from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

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

interface PropertiesPanelProps {
  selectedElement: CanvasElement | null;
  onUpdateElement: (id: string, updates: Partial<CanvasElement>) => void;
}

export function PropertiesPanel({ selectedElement, onUpdateElement }: PropertiesPanelProps) {
  if (!selectedElement) {
    return (
      <div className="text-center p-8 text-muted-foreground">
        <p>Выберите элемент для редактирования его свойств</p>
      </div>
    );
  }

  const handleStyleChange = (property: string, value: string | number) => {
    onUpdateElement(selectedElement.id, {
      style: {
        ...selectedElement.style,
        [property]: value,
      },
    });
  };

  const handleContentChange = (content: string) => {
    onUpdateElement(selectedElement.id, { content });
  };

  const handlePropertyChange = (property: string, value: any) => {
    onUpdateElement(selectedElement.id, {
      properties: {
        ...selectedElement.properties,
        [property]: value,
      },
    });
  };

  const getDefaultTabForElementType = () => {
    if (selectedElement.type === "image") return "content";
    if (["button", "heading", "subheading", "text"].includes(selectedElement.type)) return "text";
    return "style";
  };

  return (
    <div className="space-y-4 h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h4 className="font-medium capitalize">{selectedElement.type}</h4>
          <p className="text-xs text-muted-foreground">ID: {selectedElement.id}</p>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon">
            <Copy className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-destructive">
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue={getDefaultTabForElementType()}>
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="content">Контент</TabsTrigger>
          <TabsTrigger value="style">Стиль</TabsTrigger>
          <TabsTrigger value="advanced">Дополнительно</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          {["text", "heading", "subheading", "button"].includes(selectedElement.type) && (
            <>
              <div className="space-y-2">
                <Label>Текст</Label>
                <Textarea
                  value={selectedElement.content}
                  onChange={(e) => handleContentChange(e.target.value)}
                  rows={3}
                />
              </div>
              
              <div className="flex items-center gap-1 mt-2">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Bold className="size-3.5" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Italic className="size-3.5" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Underline className="size-3.5" />
                </Button>
                <div className="w-px h-6 bg-border mx-1"></div>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <AlignLeft className="size-3.5" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <AlignCenter className="size-3.5" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <AlignRight className="size-3.5" />
                </Button>
              </div>
            </>
          )}

          {selectedElement.type === "image" && (
            <>
              <div className="space-y-2">
                <Label>URL изображения</Label>
                <Input
                  value={selectedElement.properties.src || ""}
                  onChange={(e) => handlePropertyChange("src", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Альтернативный текст</Label>
                <Input
                  value={selectedElement.properties.alt || ""}
                  onChange={(e) => handlePropertyChange("alt", e.target.value)}
                />
              </div>
            </>
          )}

          {selectedElement.type === "button" && (
            <div className="space-y-2">
              <Label>Ссылка</Label>
              <div className="flex gap-2">
                <Input
                  value={selectedElement.properties.link || ""}
                  onChange={(e) => handlePropertyChange("link", e.target.value)}
                  placeholder="https://"
                />
                <Button variant="outline" size="icon">
                  <Link className="size-4" />
                </Button>
              </div>
            </div>
          )}

          {selectedElement.type === "video" && (
            <div className="space-y-2">
              <Label>URL видео</Label>
              <Input
                value={selectedElement.properties.src || ""}
                onChange={(e) => handlePropertyChange("src", e.target.value)}
                placeholder="https://youtube.com/..."
              />
            </div>
          )}
        </TabsContent>

        <TabsContent value="style" className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label>Ширина</Label>
              <Input
                type="text"
                value={selectedElement.style.width || ""}
                onChange={(e) => handleStyleChange("width", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Высота</Label>
              <Input
                type="text"
                value={selectedElement.style.height || ""}
                onChange={(e) => handleStyleChange("height", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label>X-позиция</Label>
              <Input
                type="text"
                value={selectedElement.style.left || ""}
                onChange={(e) => handleStyleChange("left", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Y-позиция</Label>
              <Input
                type="text"
                value={selectedElement.style.top || ""}
                onChange={(e) => handleStyleChange("top", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Цвет фона</Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  type="text"
                  value={selectedElement.style.backgroundColor || ""}
                  onChange={(e) => handleStyleChange("backgroundColor", e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center mr-2">
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: selectedElement.style.backgroundColor as string || "transparent" }}
                  ></div>
                </div>
              </div>
              <Input
                type="color"
                className="w-10 p-1 h-9"
                value={selectedElement.style.backgroundColor as string || "#ffffff"}
                onChange={(e) => handleStyleChange("backgroundColor", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Цвет текста</Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  type="text"
                  value={selectedElement.style.color || ""}
                  onChange={(e) => handleStyleChange("color", e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center mr-2">
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: selectedElement.style.color as string || "transparent" }}
                  ></div>
                </div>
              </div>
              <Input
                type="color"
                className="w-10 p-1 h-9"
                value={selectedElement.style.color as string || "#000000"}
                onChange={(e) => handleStyleChange("color", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Размер шрифта</Label>
            <div className="flex gap-2 items-center">
              <Slider
                defaultValue={[16]}
                min={8}
                max={72}
                step={1}
                value={[parseInt(selectedElement.style.fontSize as string) || 16]}
                onValueChange={(value) => handleStyleChange("fontSize", `${value[0]}px`)}
                className="flex-1"
              />
              <div className="w-12">
                <Input
                  type="number"
                  min={8}
                  max={72}
                  value={parseInt(selectedElement.style.fontSize as string) || 16}
                  onChange={(e) => handleStyleChange("fontSize", `${e.target.value}px`)}
                  className="text-center"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Скругление углов</Label>
            <div className="flex gap-2 items-center">
              <Slider
                defaultValue={[0]}
                min={0}
                max={50}
                step={1}
                value={[parseInt(selectedElement.style.borderRadius as string) || 0]}
                onValueChange={(value) => handleStyleChange("borderRadius", `${value[0]}px`)}
                className="flex-1"
              />
              <div className="w-12">
                <Input
                  type="number"
                  min={0}
                  max={50}
                  value={parseInt(selectedElement.style.borderRadius as string) || 0}
                  onChange={(e) => handleStyleChange("borderRadius", `${e.target.value}px`)}
                  className="text-center"
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <div className="space-y-2">
            <Label>ID элемента</Label>
            <Input value={selectedElement.id} disabled />
          </div>
          
          <div className="space-y-2">
            <Label>Z-индекс</Label>
            <Input
              type="number"
              value={selectedElement.style.zIndex || 0}
              onChange={(e) => handleStyleChange("zIndex", parseInt(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <Label>Прозрачность</Label>
            <div className="flex gap-2 items-center">
              <Slider
                defaultValue={[100]}
                min={0}
                max={100}
                step={1}
                value={[parseInt((selectedElement.style.opacity as string || "1") + "") * 100]}
                onValueChange={(value) => handleStyleChange("opacity", value[0] / 100)}
                className="flex-1"
              />
              <div className="w-12">
                <Input
                  type="number"
                  min={0}
                  max={100}
                  value={parseInt((selectedElement.style.opacity as string || "1") + "") * 100}
                  onChange={(e) => handleStyleChange("opacity", parseInt(e.target.value) / 100)}
                  className="text-center"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Анимация появления</Label>
            <Select 
              value={selectedElement.properties.animation || "none"}
              onValueChange={(value) => handlePropertyChange("animation", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите анимацию" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Без анимации</SelectItem>
                <SelectItem value="fade-in">Появление</SelectItem>
                <SelectItem value="slide-up">Снизу вверх</SelectItem>
                <SelectItem value="slide-down">Сверху вниз</SelectItem>
                <SelectItem value="slide-left">Справа налево</SelectItem>
                <SelectItem value="slide-right">Слева направо</SelectItem>
                <SelectItem value="scale-in">Увеличение</SelectItem>
                <SelectItem value="rotate-in">Вращение</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Режим отображения</Label>
            <Select
              value={selectedElement.style.display as string || "block"}
              onValueChange={(value) => handleStyleChange("display", value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="block">Блочный (block)</SelectItem>
                <SelectItem value="inline-block">Строчно-блочный (inline-block)</SelectItem>
                <SelectItem value="flex">Flex</SelectItem>
                <SelectItem value="grid">Grid</SelectItem>
                <SelectItem value="none">Скрытый (none)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>CSS классы</Label>
            <Input
              value={selectedElement.properties.className || ""}
              onChange={(e) => handlePropertyChange("className", e.target.value)}
              placeholder="Например: my-custom-class"
            />
          </div>
          
          <div className="space-y-2">
            <Label>Пользовательский CSS</Label>
            <Textarea
              value={selectedElement.properties.customCSS || ""}
              onChange={(e) => handlePropertyChange("customCSS", e.target.value)}
              placeholder="/* Ваш CSS код */"
              rows={4}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
