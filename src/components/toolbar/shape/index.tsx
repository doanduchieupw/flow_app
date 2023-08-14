import { Menu, Popover, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { v4 as uuidv4 } from "uuid";

import { useNode } from "@store/node.store";
import { ReactComponent as ShapeIcon } from "@icon/shape.svg";
import { SHAPE_PANEL } from "./constant";
import { useState } from "react";

const CreateShapeToolbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { addNode } = useNode();
  const handleAddNode = () => {
    setOpen(false);
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
    <Menu
      shadow="md"
      offset={15}
      position="right-start"
      opened={open}
      onChange={setOpen}
      radius={4}
      closeOnClickOutside
    >
      <Menu.Target>
        <UnstyledButton className="w-11 h-11 p-1.5">
          <ShapeIcon />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <div className="p-4 grid grid-cols-3 place-items-center">
          {SHAPE_PANEL.map((item, index) => (
            <UnstyledButton
              key={index}
              className="w-10 h-10 rounded-md hover:bg-slate-200 px-1.5 py-0.5 !text-[#050038] hover:!text-blue-700"
              onClick={handleAddNode}
            >
              {item.icon}
            </UnstyledButton>
          ))}
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};

export default CreateShapeToolbar;
