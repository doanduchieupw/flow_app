import { ReactComponent as RetangleIcon } from "@icon/retangle.svg";
import { ReactComponent as RoundedRetangleIcon } from "@icon/rounded-rectangle.svg";
import { ReactComponent as CircleIcon } from "@icon/circle.svg";
import { ReactComponent as TriangleIcon } from "@icon/triangle.svg";
import { ReactComponent as RhombusIcon } from "@icon/rhombus.svg";
import { ReactComponent as BubbleIcon } from "@icon/bubble.svg";
import { ReactComponent as ParallelogramIcon } from "@icon/parallelogram.svg";
import { ReactComponent as StarIcon } from "@icon/star.svg";

interface IShapePanel {
  icon: React.ReactElement;
}
export const SHAPE_PANEL: IShapePanel[] = [
  {
    icon: <RetangleIcon />,
  },
  {
    icon: <RoundedRetangleIcon />,
  },
  {
    icon: <CircleIcon />,
  },
  {
    icon: <TriangleIcon />,
  },
  {
    icon: <RhombusIcon />,
  },
  {
    icon: <BubbleIcon />,
  },
  {
    icon: <ParallelogramIcon />,
  },
  {
    icon: <StarIcon />,
  },
];
