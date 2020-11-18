import React, { useCallback, createContext, useState } from "react";
import { fabric } from "fabric";

type FabContext = { canvas?: any; initCanvas?: any; loadFromJSON?: any; activeObject?: any; setActiveObject?: any };

export const FabricContext = createContext<FabContext>({});

export const FabricContextProvider: React.FC = ({ children }) => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [activeObject, setActiveObject] = useState(null);

  const initCanvas = useCallback((el) => {
    const canvasOptions = {
      preserveObjectStacking: true,
      selection: true,
      defaultCursor: "default",
      backgroundColor: "#f3f3f3",
    };
    let c = new fabric.Canvas(el, canvasOptions);
    c.renderAll();
    setCanvas(c);
  }, []);

  const loadFromJSON = useCallback((el, json) => {
    let c = new fabric.Canvas(el);
    c.loadFromJSON(
      json,
      () => {
        c.renderAll.bind(c);
        c.setWidth(json.width);
        c.setHeight(json.height);
      },
      function (o: any, object: any) {
        fabric.log(o, object);
      }
    );
    c.renderAll();
    setCanvas(c);
  }, []);

  return <FabricContext.Provider value={{ canvas, initCanvas, loadFromJSON, activeObject, setActiveObject }}>{children}</FabricContext.Provider>;
};
