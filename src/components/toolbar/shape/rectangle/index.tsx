import { Editor } from "@src/components";
import { useNode } from "@src/store";
import React, { memo, useCallback } from "react";
import { Handle, NodeResizer, Position } from "reactflow";

const Rectangle = ({ id, selected }: any) => {
  const { nodes } = useNode();
  const onChange = useCallback((evt: React.FormEvent<HTMLTextAreaElement>) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="rectangle w-full h-full border-2 border-black">
      <NodeResizer color="#e87d12" isVisible={selected} />
      <Handle type="source" position={Position.Top} id="rect-top" />
      <Handle type="source" position={Position.Right} id="rect-right" />
      <div className="w-full h-full flex place-items-center">
        <Editor
        // id={`rectangle-input-${id}`}
        // name={`rectangle-input-${id}`}
        // className="w-full h-full border-none bg-transparent resize-none focus:!outline-none overflow-hidden "
        // onChange={onChange}
        />
      </div>
      <Handle type="source" position={Position.Left} id="rect-left" />
      <Handle type="source" position={Position.Bottom} id="rect-bottom" />
    </div>
  );
};

export default memo(Rectangle);
