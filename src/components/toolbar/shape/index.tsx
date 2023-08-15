import { useState } from "react";
import { Menu, UnstyledButton } from "@mantine/core";

import { ReactComponent as ShapeIcon } from "@icon/shape.svg";
import { SHAPE_PANEL } from "./constant";
import { usePreviewShape } from "@src/store";

const CreateShapeToolbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { setPreview } = usePreviewShape();
  const handleBeforeAddNode = () => {
    setOpen(false);
    setPreview({ zIndex: -1, cursor: "crosshair" });
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
              onClick={handleBeforeAddNode}
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
