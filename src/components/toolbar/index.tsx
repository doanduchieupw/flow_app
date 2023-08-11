import { v4 as uuidv4 } from "uuid";

import { ReactComponent as RetangleIcon } from "@icon/retangle.svg";
import { ReactComponent as ShapeIcon } from "@icon/shape.svg";
import { useNode } from "@store/node.store";
const Toolbar = () => {
  const { addNode } = useNode();
  const handleAddNode = () => {
    addNode({
      id: uuidv4(),
      type: "rectangle",
      position: {
        x: Math.random() * 608,
        y: Math.random() * 976,
      },
      data: { label: "node rectangle" },
      style: { border: "1px solid #009e8b", padding: 10 },
    });
  };

  return (
    <div className="bg-slate-200 p-2 rounded">
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">
          <ShapeIcon className="w-6 h-6 hover:fill-blue-500" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <RetangleIcon onClick={handleAddNode} />
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Toolbar;
