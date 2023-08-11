import ReactFlow, { Controls, Background, Panel } from "reactflow";
import "reactflow/dist/style.css";

// import { useNode } from "";
import { Toolbar } from "@src/components";
import { useNode } from "@store/node.store";

const Playground = () => {
  const { edges, nodes, onConnect, onEdgesChange, onNodesChange } = useNode();
  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
        <Panel position="top-left">
          <Toolbar />
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default Playground;
