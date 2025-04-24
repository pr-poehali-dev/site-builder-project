import { Button } from "@/components/ui/button";
import {
  Type,
  Image,
  SquareStack,
  FileText,
  Shapes,
  Video,
  FormInput,
  MapPin,
  ChevronRight,
  Box,
  ListOrdered,
  LayoutGrid,
  MenuSquare,
  Heading1,
  Heading2,
  PanelLeft,
  PanelRight,
  Mail,
  Phone,
  Calendar,
  Clock,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ElementsPanelProps {
  onAddElement: (type: string) => void;
}

export function ElementsPanel({ onAddElement }: ElementsPanelProps) {
  const elementCategories = [
    {
      name: "Основные",
      items: [
        { name: "Заголовок", type: "heading", icon: <Heading1 className="size-4" /> },
        { name: "Подзаголовок", type: "subheading", icon: <Heading2 className="size-4" /> },
        { name: "Текст", type: "text", icon: <Type className="size-4" /> },
        { name: "Изображение", type: "image", icon: <Image className="size-4" /> },
        { name: "Кнопка", type: "button", icon: <SquareStack className="size-4" /> },
        { name: "Разделитель", type: "divider", icon: <PanelLeft className="size-4" /> },
      ],
    },
    {
      name: "Контейнеры",
      items: [
        { name: "Секция", type: "section", icon: <Box className="size-4" /> },
        { name: "Колонки", type: "columns", icon: <LayoutGrid className="size-4" /> },
        { name: "Карточка", type: "card", icon: <PanelRight className="size-4" /> },
        { name: "Аккордеон", type: "accordion", icon: <MenuSquare className="size-4" /> },
      ],
    },
    {
      name: "Медиа",
      items: [
        { name: "Галерея", type: "gallery", icon: <SquareStack className="size-4" /> },
        { name: "Видео", type: "video", icon: <Video className="size-4" /> },
        { name: "Карта", type: "map", icon: <MapPin className="size-4" /> },
        { name: "Слайдер", type: "slider", icon: <Shapes className="size-4" /> },
      ],
    },
    {
      name: "Формы",
      items: [
        { name: "Поле ввода", type: "input", icon: <FormInput className="size-4" /> },
        { name: "Текстовая область", type: "textarea", icon: <FileText className="size-4" /> },
        { name: "Email поле", type: "email", icon: <Mail className="size-4" /> },
        { name: "Телефон", type: "phone", icon: <Phone className="size-4" /> },
        { name: "Дата", type: "date", icon: <Calendar className="size-4" /> },
        { name: "Время", type: "time", icon: <Clock className="size-4" /> },
      ],
    },
    {
      name: "Списки",
      items: [
        { name: "Маркированный список", type: "bulletList", icon: <ListOrdered className="size-4" /> },
        { name: "Нумерованный список", type: "numberedList", icon: <ListOrdered className="size-4" /> },
      ],
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 mb-4">
        <Button
          variant="outline"
          className="flex justify-start items-center gap-2"
          onClick={() => onAddElement("text")}
        >
          <Type className="size-4" />
          Текст
        </Button>
        <Button
          variant="outline"
          className="flex justify-start items-center gap-2"
          onClick={() => onAddElement("image")}
        >
          <Image className="size-4" />
          Изображение
        </Button>
        <Button
          variant="outline"
          className="flex justify-start items-center gap-2 col-span-2"
          onClick={() => onAddElement("button")}
        >
          <SquareStack className="size-4" />
          Кнопка
        </Button>
      </div>

      <Accordion type="multiple" className="space-y-2">
        {elementCategories.map((category) => (
          <AccordionItem key={category.name} value={category.name}>
            <AccordionTrigger className="py-2">
              <div className="flex items-center">
                <ChevronRight className="mr-2 size-4" />
                {category.name}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-2 pt-2">
                {category.items.map((item) => (
                  <Button
                    key={item.type}
                    variant="outline"
                    size="sm"
                    className="justify-start h-9"
                    onClick={() => onAddElement(item.type)}
                  >
                    {item.icon}
                    <span className="ml-2 text-xs">{item.name}</span>
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-6 pt-6 border-t">
        <h3 className="text-sm font-medium mb-3">Шаблоны блоков</h3>
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-video rounded border bg-background cursor-pointer hover:border-primary transition-colors"
              onClick={() => onAddElement("template")}
            >
              <div className="h-full bg-muted/50 flex items-center justify-center text-xs text-muted-foreground">
                Блок {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
