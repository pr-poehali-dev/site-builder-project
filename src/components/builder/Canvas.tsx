import { useRef, useState } from "react";

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

interface CanvasProps {
  elements: CanvasElement[];
  selectedElement: string | null;
  onSelectElement: (id: string | null) => void;
  onUpdateElement: (id: string, updates: Partial<CanvasElement>) => void;
  onRemoveElement: (id: string) => void;
}

export function Canvas({
  elements,
  selectedElement,
  onSelectElement,
  onUpdateElement,
  onRemoveElement,
}: CanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [dragInfo, setDragInfo] = useState<{
    isDragging: boolean;
    elementId: string | null;
    startX: number;
    startY: number;
    offsetX: number;
    offsetY: number;
  }>({
    isDragging: false,
    elementId: null,
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
  });

  const handleElementMouseDown = (
    e: React.MouseEvent,
    elementId: string
  ) => {
    if (e.button !== 0) return; // Only process left clicks
    e.stopPropagation();
    
    const element = elements.find((el) => el.id === elementId);
    if (!element) return;

    onSelectElement(elementId);
    
    // Get current element position
    const left = parseInt(element.style.left as string) || 0;
    const top = parseInt(element.style.top as string) || 0;
    
    // Start dragging
    setDragInfo({
      isDragging: true,
      elementId,
      startX: e.clientX,
      startY: e.clientY,
      offsetX: left,
      offsetY: top,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragInfo.isDragging || !dragInfo.elementId) return;

    // Calculate new position
    const deltaX = e.clientX - dragInfo.startX;
    const deltaY = e.clientY - dragInfo.startY;
    
    const newLeft = dragInfo.offsetX + deltaX;
    const newTop = dragInfo.offsetY + deltaY;
    
    // Update element position
    onUpdateElement(dragInfo.elementId, {
      style: {
        ...elements.find((el) => el.id === dragInfo.elementId)?.style,
        left: `${newLeft}px`,
        top: `${newTop}px`,
      },
    });
  };

  const handleMouseUp = () => {
    setDragInfo({
      isDragging: false,
      elementId: null,
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
    });
  };

  const handleCanvasClick = () => {
    onSelectElement(null);
  };

  const renderElement = (element: CanvasElement) => {
    const isSelected = element.id === selectedElement;
    
    const elementStyle = {
      ...element.style,
      position: "absolute" as const,
      cursor: "move",
    };

    const handleDoubleClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      // Handle double click (e.g., edit inline content)
    };
    
    const containerClasses = `element-container ${
      isSelected ? "ring-2 ring-primary ring-offset-2" : ""
    }`;

    switch (element.type) {
      case "text":
      case "heading":
      case "subheading":
        return (
          <div
            key={element.id}
            style={elementStyle}
            className={containerClasses}
            onMouseDown={(e) => handleElementMouseDown(e, element.id)}
            onDoubleClick={handleDoubleClick}
          >
            <div className="p-2">{element.content}</div>
          </div>
        );
      
      case "image":
        return (
          <div
            key={element.id}
            style={elementStyle}
            className={containerClasses}
            onMouseDown={(e) => handleElementMouseDown(e, element.id)}
          >
            <img
              src={element.properties.src || "/placeholder.svg"}
              alt={element.properties.alt || ""}
              className="w-full h-full object-cover"
            />
          </div>
        );
      
      case "button":
        return (
          <div
            key={element.id}
            style={elementStyle}
            className={containerClasses}
            onMouseDown={(e) => handleElementMouseDown(e, element.id)}
          >
            <button
              className="px-4 py-2 bg-primary text-primary-foreground rounded"
              style={{ pointerEvents: "none" }}
            >
              {element.content || "Кнопка"}
            </button>
          </div>
        );
      
      case "divider":
        return (
          <div
            key={element.id}
            style={{
              ...elementStyle,
              height: "2px",
              backgroundColor: "currentColor",
            }}
            className={containerClasses}
            onMouseDown={(e) => handleElementMouseDown(e, element.id)}
          />
        );
      
      case "video":
        return (
          <div
            key={element.id}
            style={elementStyle}
            className={containerClasses}
            onMouseDown={(e) => handleElementMouseDown(e, element.id)}
          >
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span>Видео</span>
            </div>
          </div>
        );
      
      case "section":
      case "card":
      case "columns":
        return (
          <div
            key={element.id}
            style={{
              ...elementStyle,
              backgroundColor: "rgba(200, 200, 200, 0.2)",
              border: "1px dashed #ccc",
            }}
            className={containerClasses}
            onMouseDown={(e) => handleElementMouseDown(e, element.id)}
          >
            <div className="p-4">
              <span className="text-xs text-muted-foreground">
                {element.type.charAt(0).toUpperCase() + element.type.slice(1)}
              </span>
            </div>
          </div>
        );
      
      // Handle other element types
      default:
        return (
          <div
            key={element.id}
            style={elementStyle}
            className={containerClasses}
            onMouseDown={(e) => handleElementMouseDown(e, element.id)}
          >
            <div className="p-2 border bg-muted/50 rounded">
              {element.content || element.type}
            </div>
          </div>
        );
    }
  };

  return (
    <div 
      ref={canvasRef}
      className="min-h-[800px] w-full relative bg-white border"
      onClick={handleCanvasClick}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Grid background for better visibility */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Canvas content */}
      {elements.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center p-8 text-muted-foreground">
          <p className="text-lg mb-2">Пустой холст</p>
          <p className="text-sm max-w-md">
            Добавьте элементы из панели слева, чтобы начать создание вашего сайта
          </p>
        </div>
      ) : (
        elements.map((element) => renderElement(element))
      )}
    </div>
  );
}
