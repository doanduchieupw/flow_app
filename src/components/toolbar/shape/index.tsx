import { Popover, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { v4 as uuidv4 } from "uuid";

import { useNode } from "@store/node.store";
import { ReactComponent as ShapeIcon } from "@icon/shape.svg";
import { SHAPE_PANEL } from "./constant";

const CreateShapeToolbar = () => {
  const [opened, { close, open }] = useDisclosure(false);
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
    <Popover
      width={150}
      offset={20}
      position="right-start"
      shadow="md"
      opened={opened}
    >
      <Popover.Target>
        <UnstyledButton
          className="w-6 h-6"
          onMouseEnter={open}
          onMouseLeave={close}
        >
          <ShapeIcon />
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown sx={{ pointerEvents: "none" }}>
        <div className="grid grid-cols-3 gap-2">
          {SHAPE_PANEL.map((item, index) => (
            <UnstyledButton key={index} className="w-6 h-6 hover:bg-slate-200">
              {item.icon}
            </UnstyledButton>
          ))}
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};

export default CreateShapeToolbar;
