import ReactFlow, {
  Controls,
  Background,
  Panel,
  ConnectionMode,
} from "reactflow";
import "reactflow/dist/style.css";

import { Toolbar, ViewportTracker } from "@src/components";
import { useNode } from "@store/node.store";
import { nodeTypes } from "../toolbar/shape/constant";

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
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        fitView
      >
        <Background />
        <Controls />
        <Panel position="top-left">
          <Toolbar />
        </Panel>
        <ViewportTracker />
      </ReactFlow>
    </div>
  );
};

export default Playground;
