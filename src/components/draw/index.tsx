import { useState, PropsWithChildren } from "react";
import { Stage, Layer, Rect } from "react-konva";
import { Html } from "react-konva-utils";
import { v4 as uuidv4 } from "uuid";

import { useNode, usePreviewShape, useViewportFlow } from "@src/store";

interface IDraw {
  children: React.ReactElement;
}

interface IShape {
  x: number;
  y: number;
  width: number;
  height: number;
}

const Draw: React.FC<IDraw> = ({ children }: IDraw) => {
  const { isDrawing, zIndex, cursor, setDrawing, setInitPreview } =
    usePreviewShape();
  const { addNode } = useNode();
  const [shape, setShape] = useState<IShape>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const { x, y, zoom } = useViewportFlow();

  const handleMouseDown = (e: any) => {
    const stage = e.target.getStage();
    const point = stage?.getPointerPosition();

    setDrawing(true);
    setShape({ x: point.x, y: point.y, width: 0, height: 0 });
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage?.getPointerPosition();
    setShape((prev: IShape) => ({
      ...prev,
      width: point?.x - prev.x,
      height: point?.y - prev.y,
    }));
  };

  const handleMouseUp = () => {
    setDrawing(false);
    setShape({ x: 0, y: 0, width: 0, height: 0 });
    setInitPreview();
    addNode({
      id: uuidv4(),
      type: "rectangle",
      position: {
        x: (shape.x - x) / zoom,
        y: (shape.y - y) / zoom,
      },
      data: { label: "node rectangle" },
      style: {
        border: "1px solid #009e8b",
        width: shape.width / zoom,
        height: shape.height / zoom,
      },
    });
  };
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ backgroundColor: "transparent", cursor: `${cursor}` }}
    >
      <Layer>
        <Rect
          x={shape.x}
          y={shape.y}
          width={shape.width}
          height={shape.height}
          stroke="#9f9f9f"
          strokeWidth={2}
        />
        <Html
          divProps={{
            style: {
              width: "100%",
              height: "100%",
              zIndex: `${zIndex}`,
            },
          }}
        >
          {children}
        </Html>
      </Layer>
    </Stage>
  );
};

export default Draw;
