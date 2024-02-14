import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Board from "./components/Board";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen bg-neutral-900 text-50">
      <Board />
    </div>
  );
}

export default App;
