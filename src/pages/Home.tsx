import { useState } from "react";
import "../App.css";
import Logo from "../component/Logo";
import SimpleSlider from "../component/SimpleSlider";

function Home() {
  const sessionCount = parseInt(sessionStorage.getItem("count") || "0");
  const [count, setCount] = useState(sessionCount || 0);
  sessionStorage.setItem("count", JSON.stringify(count));

  return (
    <>
      <div><SimpleSlider /></div>
      <div>
        <Logo type="vite" link="https://vitejs.dev" />
        <Logo type="react" link="https://react.dev" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="modifier sum">
          <h3>Add a new value:</h3>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
        <div className="modifier minus">
          <h3>Remove a value:</h3>
          <button onClick={() => setCount((count) => count - 1)}>-</button>
        </div>
        <div>
          <h2>Count is {count}</h2>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Home;
