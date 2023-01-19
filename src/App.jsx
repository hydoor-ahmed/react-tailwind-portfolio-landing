import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="dark:bg-gray-900 dark:text-white">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      </div>
    </div>
  );
};

export default App;
