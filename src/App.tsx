import { ReactFlowProvider } from "reactflow";
import { Draw, Editor, Playground } from "./components";

function App() {
  return (
    <div className="h-screen w-screen relative">
      <ReactFlowProvider>
        <Draw>
          <Playground />
        </Draw>
      </ReactFlowProvider>
    </div>
  );
}

export default App;
