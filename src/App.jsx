import { useState } from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Top from "./components/Top";
import Navbar from "./components/Navbar";

function App() {
  const [menu, setMenu] = useState("");

  return (
    <>
      <Top />
      <Navbar menu={menu} setMenu={setMenu} />

      <AnimatedRoutes setMenu={setMenu} />
    </>
  );
}

export default App;