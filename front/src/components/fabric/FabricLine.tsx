import React, { useState, useContext, useEffect } from "react";
import { fabric } from "fabric";
import { FabricContext } from "./FabricContext";

const FabricLine = () => {
  const { canvas, activeObject } = useContext(FabricContext);
  const [showTools, setShowTools] = useState(false);
  const [options, setOptions] = useState({
    left: 100,
    top: 100,
    stroke: "black",
    hoverCursor: "default",
    strokeWidth: 2,
  });

  const addLine = () => {
    const line = new fabric.Line([100, 100, 300, 100], options);
    canvas.add(line);
  };

  useEffect(() => {
    setShowTools(activeObject ? activeObject.get("type") === "line" : false);
    if (activeObject) {
      const activeOptions = {};
      setOptions({ ...options, ...activeOptions });
    }
  }, [activeObject]);

  return (
    <>
      <button onClick={addLine}>Add Line</button>
      {showTools && (
        <div>
          <label htmlFor="strokeWidth">Stroke Width: </label>
          <br />
          <label htmlFor="color">Stroke: </label>

          <br />
        </div>
      )}
      <hr />
    </>
  );
};

export default FabricLine;
