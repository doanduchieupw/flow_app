import { Editor } from "@src/components";
import { useNode } from "@src/store";
import React, { memo, useCallback } from "react";
import { Handle, Position } from "reactflow";

const Rectangle = ({ id }) => {
  const { nodes } = useNode();
  const onChange = useCallback((evt: React.FormEvent<HTMLTextAreaElement>) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="rectangle w-full h-full">
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Right} />
      <div className="w-full h-full flex place-items-center">
        <Editor
        // id={`rectangle-input-${id}`}
        // name={`rectangle-input-${id}`}
        // className="w-full h-full border-none bg-transparent resize-none focus:!outline-none overflow-hidden "
        // onChange={onChange}
        />
      </div>
      <Handle type="source" position={Position.Left} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default memo(Rectangle);
