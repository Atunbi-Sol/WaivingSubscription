import { useState } from "react";
import "./App.css";
import SubList from "./subscription/SubList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <SubList />
    </div>
  );
}

export default App;
