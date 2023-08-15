import { ReactComponent as RetangleIcon } from "@icon/retangle.svg";
import { ReactComponent as RoundedRetangleIcon } from "@icon/rounded-rectangle.svg";
import { ReactComponent as CircleIcon } from "@icon/circle.svg";
import { ReactComponent as TriangleIcon } from "@icon/triangle.svg";
import { ReactComponent as RhombusIcon } from "@icon/rhombus.svg";
import { ReactComponent as BubbleIcon } from "@icon/bubble.svg";
import { ReactComponent as ParallelogramIcon } from "@icon/parallelogram.svg";
import { ReactComponent as StarIcon } from "@icon/star.svg";
import RectangleShape from "./rectangle";

interface IShapePanel {
  icon: React.ReactElement;
  type: string;
}
export const SHAPE_PANEL: IShapePanel[] = [
  {
    icon: <RetangleIcon />,
    type: "rectangle",
  },
  {
    icon: <RoundedRetangleIcon />,
    type: "rounded rectangle",
  },
  {
    icon: <CircleIcon />,
    type: "circle",
  },
  {
    icon: <TriangleIcon />,
    type: "triangle",
  },
  {
    icon: <RhombusIcon />,
    type: "rhombus",
  },
  {
    icon: <BubbleIcon />,
    type: "bubble",
  },
  {
    icon: <ParallelogramIcon />,
    type: "parallelogram",
  },
  {
    icon: <StarIcon />,
    type: "star",
  },
];

export const nodeTypes = {
  rectangle: RectangleShape,
};
